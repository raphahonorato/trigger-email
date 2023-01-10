const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const port = process.env.PORT

//credenciais do email de disparo
const user = "EMAIL DE DISPARO"
const pass = "SENHA"

//página web onde está rodando a aplicação
app.get('/', (req, res) => res.send('Hello, world'));

//assim que acessada o email é disparado
app.get('/send', (req, res) => {

    //credenciais SMTP da hospedagem 
    const transporter = nodemailer.createTransport({
        host: "<DOMINIO HOST>",
        port: <PORTA/>,
        auth: { user, pass }
    })

    //corpo do email que será enviado
    transporter.sendMail({
        from: user,                                   //quem enviou o email
        to: "<REMETENTE>",               //onde chegará o formulário preenchido do usuário
        replyTo: "<REPLY TO>",   //botão reply responde pra esse email
        subject: "Teste de envio!!!",                 //assunto do email
        text: "Teste de conteúdo do email..",         //conteúdo do email --PODE SER INSERIDO HTML
    }).then(info => {
        res.send(info)
    }).catch(error => {
        res.send(error)
    })

})

//porta que está sendo executada a aplicação
app.listen(port, () => console.log(`RODANDO NA PORTA -- ${port}`));