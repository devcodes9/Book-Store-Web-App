const express = require("express");

const mongoose = require("mongoose");

const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

app.use(cors());

mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.tp21n.mongodb.net/?retryWrites=true&w=majority"
).then(()=> console.log("Connected to a database"))
.then(()=> {
    app.listen(5000);
})
.catch((err)=> console.log(err));

app.use(express.json());
app.use("/books",router);