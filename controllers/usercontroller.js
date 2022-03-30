const { User, Thought } = require("../models");

const userController = {

    //Get Users
    getAllUsers(req, res) {

        User.find({})
            .populate("thoughts")
            .populate("friends")
            .then(dbUsers => res.json(dbUsers))
            .catch(err => {

                console.log(err);
                res.status(500).json(err);
            });
    },

    //Grab users by ID
    getUserById(req, res) {

        console.log("Getting user by ID",
            req.params)
        User.findOne({ id: req.params.userId })
            //Might not need
            .populate("thoughts")
            .populate("friends")
            .then(dbUsers => res.json(dbUsers))
            .catch(err => {


                console.log(err);
                res.status(404).json(err);
            });
    },

    //Creating new Users
    createNewUser(req, res) {

        console.log("Inserting into frontend",
            req.body)
        User.create(req.body)

            .then(dbUsers => res.json(dbUsers))
            .catch(err => {

                console.log(err);
                res.status(500).json(err);
            });
    },

    //Update users by id
    updateUserById(req, res) {

        console.log("Getting a user by Id",
            req.params.id)
        console.log(req.body)
        User.findOneAndUpdate({ _id: req.params.id }, req.body)

            .then(dbUsers => res.json(dbUsers))
            .catch(err => {

                console.log(err);
                res.status(400).json(err);
            });
    },

    //Deleting Users by id
    deleteUserById(req, res) {

        console.log("Deleting the user by their id",
            req.params.id)
        User.findOneAndDelete({ _id: req.params.id })

            .then(dbUsers => res.json(dbUsers))
            .catch(err => {

                console.log(err);
                res.status(404).json(err);
            });
    },

    //Adding to friends list
    addToFriendList(req, res) {

        console.log("Adding Friend!",
            req.params.id)
        User.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { friends: req.params.friendid } })
        
            .then(dbUsers => res.json(dbUsers))
            .catch(err => {

                console.log(err);
                res.status(500).json(err);
            });
    },

    //Removing users from friends list
    removeFromFriendList(req, res) {

        console.log("Removing Friend!",
            req.params.id)
        User.findOneAndUpdate({ _id: req.params.id }, { $pull: { friends: req.params.friendid } })

            .then(dbUsers => res.json(dbUsers))
            .catch(err => {

                console.log(err);
                res.status(500).json(err);
            });
    }



}


module.exports = userController;