const { userModel, countModel } = require('../model/user.model')

const getUser = async (req, res) => {
  let dbRes = await userModel.find({})
  //   console.log('dbRes->', dbRes);
  res.status(200).send({
    status: 200,
    message: 'Total Users',
    data: dbRes
  })
}

const getCount = async (req, res) => {
  let dbRes = await countModel.find({})
  //   console.log('getCount->', dbRes);
  res.status(200).send({
    status: 200,
    message: 'Add & Update api count',
    data: dbRes
  })
}

const incrementCount = async () => {
  let countPlus = await countModel.find({})
  let newCount = countPlus?.[0]?.count + 1
  await countModel.findByIdAndUpdate(
    { _id: countPlus?.[0]?._id },
    { count: newCount }
  )
}

const addNewUser = async (req, res) => {
  let data = req?.body
  await incrementCount()
  let dbRes = await userModel.create({
    name: data?.name,
    email: data?.email,
    role: data?.role
  })
  //   console.log('dbRes->', dbRes);
  res.status(200).send({
    status: 200,
    message: 'New User Added',
    data: dbRes
  })
}

const updateUser = async (req, res) => {
  let { id, name, role } = req.body
  await incrementCount()
  if (!id) res.status(400).send({ status: 400, message: 'Missing Id' })

  let updateBody = {}
  if (name && role) {
    updateBody = { name, role }
  } else if (name) {
    updateBody = { name }
  } else if (role) {
    updateBody = { role }
  } else {
    res.status(400).send({ status: 400, message: 'Missing Body' })
  }

  let dbRes = await userModel.findByIdAndUpdate({ _id: id }, updateBody)

  res.status(200).send({
    status: 200,
    message: 'Data Update',
    data: dbRes
  })
}

module.exports = {
  getUser,
  getCount,
  addNewUser,
  updateUser
}
