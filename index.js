const express = require("express")
const { connectToMongoDB } = require("./connect")
const app = express()
const port = 9001
const URL = require("./models/url")
const urlroute = require("./routes/url")
const staticRouter = require("./routes/staticRouter")
const path = require("path")

connectToMongoDB("mongodb://127.0.0.1:27017/url-shortner").then(() => {
  console.log("MongoDB Connected")
})

// set the view engine to ejs
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))

// app.get("/html", async (req, res) => {
//   const allUrls = await URL.find({})
//   res.render("home", {
//     urls: allUrls
//   })
// })

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/url", urlroute)
app.use("/", staticRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
