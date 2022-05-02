const express = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.get('/', (req, res) => {
  res.send('<h1>Hello World com React Celke now!</h1>')
})
 
app.get('/contatos/:id', (req, res) => {
    const {id} = req.params;
    const {job} = req.query;

    return res.json({
    id:id,
    nome: 'RENATO ALVES SOARES',
    email: 'renatoguara2020@gmail.com',
    job: job,
    idade: 50
  })
});
app.post('/contato', (req, res)=> {

  return res.json({
    nome: 'NATHAN BARBOSA SOARES',
    email: 'nathanguara2020@gmail.com',
    job: 'React and Node JS Developer',
    idade: 4

  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});