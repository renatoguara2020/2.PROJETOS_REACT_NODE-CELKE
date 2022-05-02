const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1>Hello World com React Celke now!</h1>')
})
 
app.get('/contatos', (req, res) => {


    return res.json({
    'nome': 'RENATO ALVES SOARES',
    'email': 'renatoguara2020@gmail.com',
    'idade': 50
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});