## Disparador de email em JavaScript

Para instalar as dependências

`npm install`

---

Para executar o script

`npm start`

---

Para acessar a aplicação
`http://localhost:<PORT>`

DEFAULT=3000

>Editável no arquivo `.env`

---

Como disparar o email

Acesse a rota `/send`

>Assim que é acessada, o email é disparado automaticamente.


---
>Nesse meu contexto, usei para pegar informações de um formulário que é trazido pelo front da minha aplicação.

>Que responde para um outro email feito que armazena esses dados.




    transporter.sendMail({
        from: '"NOME DE EXIBICAO" <EMAIL_REMETENTE>',                          //quem enviou o email
        to: "<EMAIL_DETINATARIO>",                                             //onde chegará o formulário preenchido do usuário
        replyTo: "<EMAIL_REPLY_TO>",                                           //botão reply (responde para esse email)
        subject: "Dados de Formulário",                                        //assunto do email
        text: "Informações do Formulário: \nCarteira: " + req.query.carteira
            + "\nQuantidade de Tokens: " + req.query.tokens
            + "\nNome: " + req.query.nome
            + "\nCPF: " + req.query.cpf
            + "\nemail: " + req.query.email
            + "\nTelefone: " + req.query.telefone,                              //conteúdo do email --PODE SER INSERIDO HTML
            
            


---

Créditos--

Para construir isso usei a biblioteca [nodemailer](https://github.com/nodemailer/nodemailer)