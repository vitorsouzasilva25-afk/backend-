import express from  'express'
import path from 'path'

const app = express()
const porta = 3000

// criar rotas de servidor 
app.get('/', (req, res) => {
    res.sendFile('/paginas/index.html', {root: import.meta.dirname})
})

//liberar a porta do meu computador
app.listen(porta, () => { console.log('sevidor está vivo!')})
