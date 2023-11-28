const express = require("express")
const { connectToMongoDB } = require("./connect")
const app = express()
const port = 9001
const URL = require("./models/url")
const urlroute = require("./routes/url")

connectToMongoDB("mongodb://127.0.0.1:27017/url-shortner").then(() => {
  console.log("MongoDB Connected")
})
app.use(express.json())
app.use("/", urlroute)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
