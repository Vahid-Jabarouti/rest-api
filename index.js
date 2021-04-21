const express = require('express')
const bodyParser = require('body-parser')

const userRoutes = require('./routes/users')

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json())

app.use('/users', userRoutes)

app.get('/', (req, res) => {
  res.send('Hello from homepage.')
})

app.listen(port, () => console.log(`server running on port ${port} `+ 
          'press control c to terminate...'))

