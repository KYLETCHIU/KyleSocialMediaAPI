const mongoose = require("mongoose");

//conect to database
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/NoSQL-Social-Network-Api", {

    useNewUrlParser: true,
    useUnifiedTopology: true
    
});

module.exports = mongoose.connection;