// const express = require("express");
// const router = express.Router();

const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("index");
})
router.get('/shit',(req,res) =>{
    res.render('shit')
})

module.exports = router;