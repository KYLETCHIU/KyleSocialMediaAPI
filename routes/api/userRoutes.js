const router = require("express").Router();

const {

    createNewUser,
    getUserById,
    getAllUsers,
    updateUserById,
    deleteUserById,
    addToFriendList,
    removeFromFriendList

} = require("../../controllers/userController");
const { User } = require("../../models");

//Posting and getting routes
router.route("/").get(getAllUsers).post(createNewUser);

//Posting and deleting
router
    .route("/:id/friends/:friendid")
    .post(addToFriendList)
    .delete(removeFromFriendList);

    

//Get, put, and delete
router
    .route("/:id")
    .get(getUserById)
    .put(updateUserById)
    .delete(deleteUserById);



module.exports = router;