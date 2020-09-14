const bcrypt = require('bcrypt')

module.exports = {
    
    register: async (req, res) => {
        const db = req.app.get('db')
        const {firstName, lastName, email, password} = req.body
        // const transporter = req.app.get("transporter");
        let user = await db.users.get_users(email)
        if(user[0]){
            res.status(409).send('user already exists')
        } else {
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)
            const newUser = await db.users.add_user([firstName, lastName, email, hash])

            // const mailOptions = {
            //     from: "nolan.test245@gmail.com",
            //     to: email,
            //     subject: "Nice Nodemailer test",
            //     text: "Hey there, it’s our first message sent with Nodemailer ;) ",
            //     html: "<b>Hey there! </b><br> This is our first message sent with Nodemailer",
            //   };
            //   transporter.sendMail(mailOptions, (error, info) => {
            //     if (error) {
            //       return console.log(error);
            //     }
            //     console.log("Email sent successfully!");
            //   });

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