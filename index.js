const express = require('express')
const nodemailer = require('nodemailer')
const app = express()
const port = PROCESS.ENV.PORT

//credenciais do email de disparo
const user = "master@cuidarecife.com.br"
const pass = "_f19|{6+hx62"

//página web onde está rodando a aplicação
app.get('/', (req, res) => res.send('Hello, world'));
app.get('/send', (req, res) => {

    //credenciais SMTP da hospedagem 
    const transporter = nodemailer.createTransport({
        host: "mail.cuidarecife.com.br",
        port: 465,
        auth: { user, pass }
    })

    //corpo do email que será enviado
    transporter.sendMail({
        from: user,                                   //quem enviou o email
        to: "raphaahonorato@gmail.com",               //onde chegará o formulário preenchido do usuário
        replyTo: "raphaelhonorato@legionschool.io",   //botão reply responde pra esse email
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