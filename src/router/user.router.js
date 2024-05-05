const { Router } = require('express')
const userRouter = Router()

const {
  getUser,
  getCount,
  addNewUser,
  updateUser
} = require('../controller/user.controller')

// user get api route
userRouter.get('/', getUser)

// add and user api count get api
userRouter.get('/count', getCount)

// add new user api
userRouter.post('/', addNewUser)

// update user based on his id api
userRouter.patch('/', updateUser)

module.exports = userRouter
