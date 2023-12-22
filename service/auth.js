// const sessionIdToUserMap = new Map()
const jwt = require("jsonwebtoken")
const path = require("path")
const dotenv = require("dotenv")
dotenv.config({ path: path.resolve(__dirname, "../.env") })

const secret = process.env.JWT_SECRET

console.log("secretkey is this : " + secret)
function setUser(user) {
  // sessionIdToUserMap.set(id, user)
  // console.log(user)

  return jwt.sign(
    {
      _id: user._id,
      email: user.email
    },
    secret
  )
}

function getUser(token) {
  // return sessionIdToUserMap.get(id)
  if (!token) return null
  return jwt.verify(token, secret)
}

module.exports = {
  setUser,
  getUser
}
