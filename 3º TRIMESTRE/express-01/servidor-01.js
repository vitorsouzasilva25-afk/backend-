import express from  'express'
 
const app = express()
const porta = 3000

// criar rotas de servidor 
app.get('/',  (req, res) => {
    res.send('olá, abacaxi!')
})

//liberar a porta do meu computador
app.listen(porta, () => { console.log('sevidor está vivo!')})
