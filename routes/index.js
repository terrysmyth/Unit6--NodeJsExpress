const express = require('express');
const router = express.Router();
const  { projects } = require("../data/data.json");
const  { profile } = require("../data/data.json");



// HOME ROUTE
router.get("/", (req, res) => {

    res.render("index", {
        projects,
        profile
    })


})

router.get("/about", (req, res) => {

    res.render("about",  {
        projects,
        profile
    })


})

router.get("/error", (req, res) => {

    res.render("error",  {
        projects,
        profile
    })


})



// Export it
module.exports = router;