const router = require("express").Router();

const {

    getAllThoughts,
    getThoughtById,
    createNewThought,
    updateThought,
    removeThought,
    createReaction,
    removeReaction

} = require("../../controllers/thoughtController");

// Thoughts API
router.route("/").post(createNewThought);
router.route("/").get(getAllThoughts);


// Thought/Reactions API
router
    .route("/:thoughtid/reactions")
    .post(createReaction);

//Thoughts by ID API
router
    .route("/:thoughid")
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought);


//Thoughts/Reactions ID API
router
    .route("/:thoughtid/reactions/:reactionid")
    .delete(removeReaction);

module.exports = router;
