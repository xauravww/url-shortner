const express = require("express")
const {
  handleGenerateNewShortUrl,
  handleRedirectUrl,
  handleGetAnalytics
} = require("../controllers/url")
const router = express.Router()

router.post("/url", handleGenerateNewShortUrl)
router.get("/:shortId", handleRedirectUrl)
router.get("/analytics/:shortId", handleGetAnalytics)
module.exports = router
