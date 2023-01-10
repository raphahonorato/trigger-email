require('dotenv').config()
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
        port: PORTA,
        auth: { user, pass }
    })

    //corpo do email que será enviado
    transporter.sendMail({
        from: '"NOME DE EXIBICAO" <EMAIL_REMETENTE>',         //quem enviou o email
        to: "<EMAIL_DETINATARIO>",                            //onde chegará o formulário preenchido do usuário
        replyTo: "<EMAIL_DO_REPLY_TO>",                       //botão reply (responde para esse email)
        subject: "Dados de Formulário",                       //assunto do email
        text: "Informações do Formulário: \nCarteira: " + req.query.carteira
            + "\nQuantidade de Tokens: " + req.query.tokens
            + "\nNome: " + req.query.nome
            + "\nCPF: " + req.query.cpf
            + "\nemail: " + req.query.email
            + "\nTelefone: " + req.query.telefone,             //conteúdo do email --PODE SER INSERIDO HTML
    }).then(info => {
        res.send(info)
    }).catch(error => {
        res.send(error)
    })

});

//porta que está sendo executada a aplicação
app.listen(port, () => console.log(`RODANDO NA PORTA -- ${port}`));