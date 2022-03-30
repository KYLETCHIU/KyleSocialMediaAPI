//God Bless SHort JS files!
const router = require("express").Router();
const apiRoutes = require("./api");

//sets up the api directory for smooth sailing
router.use("/api", apiRoutes);

router.use((req, res) => {
    //404 Error for routes
    res.status(404).send("<h1>404 Error!<h1>");
});

module.exports = router;