const express = require('express')
const path = require('path')
const basePath = path.join(__dirname, '../templates')
const router = express.Router()

router.get('/', (req,res) => {
    res.sendFile(`${basePath}/about.html`)
})


module.exports = router