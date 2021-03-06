require('dotenv').config()
const express = require('express')
const app = express()
const port = 3001
const router  = require('./routes')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Vision Tech API')
})

app.use('/api', router)

app.listen(port, () => {
  console.log(`Vision Tech API listening on port ${port}`)
})