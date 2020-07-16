const express = require('express');
const app = express();
const router = express.Router();
const { projects } = require("../data/data.json");
const { profile } = require("../data/data.json");


router.get("/", (req, res) => {

    const projectsLength = projects.length;
    const getRandomId = Math.floor(Math.random() * projectsLength);
    res.redirect(`/projects/${getRandomId}`);


})

router.get("/:id", (req, res, next) => {
    let { id } = req.params;

    // HANDLE IT ID PARAM DOESNT EXIST (HOW TO GET A 404???)
    if ( projects[id] ) {

        const project = projects[id];

        res.render("projects", {
            project,
            profile
        });

    } else {

    	const err = new Error();
    	err.message = "Page not Found: Oh no, where are we?";
		err.status = 404;
		next(err);

    }

})


// EXPORT MODULE
module.exports = router;