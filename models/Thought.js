const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

//Schema for reactions
const reactionsSchema = new Schema({

    reactionId: {

        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },

    reactionBody: {

        type: String,
        required: true,
        maxlength: 280
    },

    username: {

        type: String,
        required: true
    },

    createdAt: {

        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format("MMM, DD, YYYY [at] hh:mm a")
    }
},
    {
        toJSON: {

            virtuals: true,
            getter: true
        },
        id: false
    }
);


//Schema for thoughts
const thoughtsSchema = new Schema({

    thoughtText: {

        type: String,
        required: true,
        minlength: 1,
        
    },
    createdAt: {

        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format("MMM, DD, YYYY [at] hh:mm a")
    },
    username: {

        type: String,
        required: true
    },
    
    reactions: [reactionsSchema]
}, 
    {
        toJSON: {

            virtuals: true,
            getters: true
        },
        id: false
});


thoughtsSchema.virtual("reactionCount").get(function () {

    return this.reactions.length;
});


const Thought = model("Thought", thoughtsSchema);
//Export the Thoughts...Good life lesson
module.exports = Thought;