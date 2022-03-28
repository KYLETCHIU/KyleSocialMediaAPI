const { Schema, model } = require("mongoose");
const moment = require("moment");

//Schema for users
const usersSchema = new Schema({

    username: {

        type: String,
        unique: true,
        required: true,
        trimmed: true
    },

    email: {

        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please be sure to macht an Email address"]
    },

    thoughts: [
        {

            type: Schema.Types.ObjectId,
            ref: "Thought"
        }
    ],

    friends: [
        {

            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
},
    {

        toJSON: {
            
        virtuals: true,
        },
        id: false
    }
);

usersSchema.virtual("friendCount").get(function () {
    
    return this.friends.length;
});

const User = model("User", usersSchema);

module.exports = User;
