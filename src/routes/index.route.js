const express = require("express")
const router = express.Router()

const alumnoController = require("../controllers/AppController")

router.get("/", alumnoController.mostrar)

module.exports = router

