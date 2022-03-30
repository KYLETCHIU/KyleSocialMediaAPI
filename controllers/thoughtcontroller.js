const { User, Thought } = require("../models");

const thoughtController = {

    //Grab all Thoughts
    getAllThoughts(req, res) {


        Thought.find({})

            .then(dbUsers => res.json(dbUsers))
            .catch(err => {

                console.log(err);
                res.status(500).json(err);
            });
    },

    //Thoughts by ID
    getThoughtById(req, res) {

        console.log("Getting thought by its id",
            req.params)
        Thought.findOne({ id: req.params.thoughtId })

            .then(dbUsers => res.json(dbUsers))
            .catch(err => {

                console.log(err);
                res.status(404).json(err);
            });
    },

    //Creating New Thought
    createNewThought(req, res) {

        console.log("Info into frontend",
            req.body)

        var t = Thought.create(req.body)

            .then(thought => {

                User.findOneAndUpdate({ _id: req.body.userid }, { $addToSet: { thoughts: thought._id } })

                    .then(dbUsers => res.json(dbUsers))
                    .catch(err => {

                        console.log(err);
                        res.status(500).json(err);
                    });
            })

            .catch(err => {

                console.log(err);
                res.status(500).json(err);
            });
    },

    //Updating Thoughts
    updateThought(req, res) {

        console.log("Getting thought by its Id",
            req.params.Id)
        Thought.findOneAndUpdate(req.params.thoughtId)

            .then(dbUsers => res.json(dbUsers))
            .catch(err => {

                console.log(err);
                res.status(400).json(err);
            });
    },

    //Remove Thoughts
    removeThought(req, res) {

        console.log("Deleting thought by its id",
            req.params.Id)
        Thought.findOneAndDelete({ id: req.params.ThoughtId })

            .then(dbUsers => res.json(dbUsers))
            .catch(err => {

                console.log(err);
                res.status(404).json(err);
            });
    },

    //Create Reactions
    createReaction(req, res) {

        console.log("Creating Reaction",
            req.params)
        Thought.findOneAndUpdate({ id: req.params })
            .push(body.thoughtId)

            .then(dbUsers => res.json(dbUsers))
            .catch(err => {

                console.log(err);
                res.status(500).json(err);
            });
    },

    //Removing Reactions
    removeReaction(req, res) {

        console.log("Removing Reaction",
            req.params.Id)
        Thought.findOneAndRemove({ id: req.params.ThoughtId })
            .pull(body.reactionId)

            .then(dbUsers => res.json(dbUsers))
            .catch(err => {

                console.log(err);
                res.status(500).json(err);
            });
    }

}

module.exports = thoughtController;