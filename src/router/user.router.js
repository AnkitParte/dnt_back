const { Router } = require('express')
const userRouter = Router()

const {
  getUser,
  getCount,
  addNewUser,
  updateUser
} = require('../controller/user.controller')

userRouter.get('/', getUser)

userRouter.get('/count', getCount)

userRouter.post('/', addNewUser)

userRouter.patch('/', updateUser)

module.exports = userRouter
