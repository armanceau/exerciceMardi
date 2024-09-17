import express  from 'express'


const app = express()
app.use(express.json())//permet de récupérer
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/hello/:name', (req, res) => {
    res.send('Bonjour ' + req.params.name + "👋")
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

