const User = require("../models/user")
const { v4: uuidv4 } = require("uuid")
const { setUser } = require("../service/auth")
async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body
  await User.create({
    name,
    email,
    password
  })
  return res.redirect("/")
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body
  const user = await User.findOne({
    email,
    password
  })
  if (!user) res.render("login", { error: "Invalid Username or Password" })
  const sessionId = uuidv4()
  setUser(sessionId, user)
  res.cookie("uid", sessionId)

  return res.redirect("/")
  //   return res.json("done")
}

module.exports = { handleUserSignUp, handleUserLogin }
