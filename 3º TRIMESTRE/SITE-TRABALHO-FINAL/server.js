import express from  'express'
import path from 'path'

const app = express()
const dirBase = import.meta.dirname
const porta = 3000
// Usando middleware (software intermediario)
app.use(express. static(path.join(dirBase, 'publico')))

// criar rotas de servidor 
app.get('/', (req, res) => {
    res.sendFile('/paginas/index.html', {root: dirBase})
})

//liberar a porta do meu computador
app.listen(porta, () => { console.log('servidor está vivo!')})
