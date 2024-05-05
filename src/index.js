const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
dotenv.config()

const app = express()
const PORT = process.env.PORT || 8888
const MONGO_URL = process.env.MONGO_URL || ''
const dbConnect = require('./config')
const userRouter = require('./router/user.router')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
//base route to access all user api endpoints
app.use('/user', userRouter)

//basic route to check if api working or not
app.get('/', (_, res) =>
  res.send({
    status: 200,
    message: 'Server is working!!!'
  })
)

app.listen(PORT, async () => {
  //making connection with DB
  await dbConnect(MONGO_URL)
  //   console.log('val->', val);
  console.log(`server is dancing on ${PORT}`)
})
