const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')

const {EMAIL, PASSWORD} = process.env

module.exports = {
    email: async (req, res) => {
        const { name, message, email, title, image } = req.body

    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass: PASSWORD
            }
        })

        let info = await transporter.sendMail({
            from: `'${name}' <${email}>`,
            to: EMAIL,
            subject: title,
            text: message,
            html: `<div>${message}</div> <img src="cid:unique@nodemailer.com"/>`,
            attachments: [
                {
                    filename: 'license.txt',
                    path: 'https://raw.github.com/nodemailer/nodemailer/master/LICENSE'
                },

                {
                    cid: 'unique@nodemailer.com',
                    path:image
                }
            ]
        }, (err, res) => {
            if (err) {
                console.log('err', err)
            } else {
                console.log('res', res)
                res.status(200).send(info)
            }
        }) catch (err) {
            console.log(err)
            res.sendStatus(500)
        },

    
    register: async (req, res) => {
        const db = req.app.get('db')
        const {firstName, lastName, email, password} = req.body
        let user = await db.users.get_users(email)
        if(user[0]){
            res.status(409).send('user already exists')
        } else {
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)
            const newUser = await db.users.add_user([firstName, lastName, email, hash])

            req.session.user = newUser[0]
            res.status(200).send(newUser[0])
        }
    },

    login: async (req, res) => {
        const db = req.app.get('db')
        const{email, password} = req.body
        let user = await db.users.get_users(email)
        console.log(user)
        if(!user[0]){
         return  res.status(401).send('user not found')
        }
        const authenticated = bcrypt.compareSync(password, user[0].password)
        if(!authenticated){
            res.status(401).send('Password incorrect')
        } else {
            req.session.user = {user_id: user[0].user_id, email: user[0].email}
            res.status(200).send(req.session.user)
        }
    },

    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },

    getUser: (req, res) => {
        if(req.session.user){
            res.status(200).send(req.session.user)
        } else{
            res.sendStatus(404)
        }
    }
}