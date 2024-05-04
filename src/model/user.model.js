const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, required: true }
})

const countSchema = new Schema({
  count: { type: Number, required: true }
})
const userModel = model('dnt', userSchema)
const countModel = model('count', countSchema)
module.exports = { userModel, countModel }
