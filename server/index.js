require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env

const authCtrl = require('./controller/authController')
const itemCtrl = require('./controller/itemCtrl')
const cartCtrl = require('./controller/cartCtrl')
const nodemailer = require('nodemailer')

const app = express()
app.use(express.json())

app.use( express.static( `${__dirname}/../build` ) );

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: EMAIL,
           pass: PASSWORD
       }
   });


app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    app.set('transporter', transporter)
    console.log('connected to database')
    app.listen(SERVER_PORT, () => console.log(`server connected on port ${SERVER_PORT}`))
}).catch(err => {
    console.log(err)
})

app.post('/auth/login', authCtrl.login)
app.post('/auth/register', authCtrl.register)
app.post('/auth/logout', authCtrl.logout)
app.get('/auth/users', authCtrl.getUser)

app.get('/api/item', itemCtrl.getItems)
app.post('/api/item', itemCtrl.postItem)
app.put('/api/item/:id', itemCtrl.editItem)
app.delete('/api/item/:id', itemCtrl.deleteItem)

app.get('/api/cart', cartCtrl.deleteItems)
app.post('/api/cart', cartCtrl.addToCart)
app.delete('/api/cart/:id', cartCtrl.deleteItem)





