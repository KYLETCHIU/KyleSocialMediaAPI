//Short js files save lives
const express = require("express");
const routes = require("./routes");
const db = require("./config/connection");


//MAKE SURE PORTS ALIGN!!!
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () =>{

//MAKE SURE PORTS ALIGN!!!    
app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));
});