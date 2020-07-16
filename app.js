// Requires
const data = require("./data/data.json")
const express = require('express');
const app = express();

// USE
app.use("/static",express.static("public"))
app.set("view engine", 'pug');
const  { projects } = require("./data/data.json");
const  { profile } = require("./data/data.json");

// ROUTES
const mainRoutes = require("./routes");
const projectRoutes = require("./routes/projects");
app.use(mainRoutes);
app.use("/projects", projectRoutes);


// MIDDLEWARE / ERROR
app.use((req, res, next) => {
	const err = new Error("Page not Found: Oh no, where are we?");
	err.status = 404;
	next(err);

})

app.use((err, req, res, next) => {
	res.locals.error = err;
	res.status(err.status || 500);
	res.render("error",  {
        projects,
        profile,
        err
    });
	next();
})

app.listen(3000, () => {
	console.log("Site is being run on localhost:3000")

})