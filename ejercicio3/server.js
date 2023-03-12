const express = require("express");
const mongoose = require("mongoose");
const app = express();

const controller = require("./usercontroller");
const cors = require("cors");

mongoose.connect('mongodb://localhost:1888/UserDB')
    .then( () => {
        console.log('Mongo initialized');

    })
    .catch(e => console.log('Error, couldnt connect'));




app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () =>{
    console.log("Server running on port 3000");
})

app.post('/login', controller.login);

app.post('/register', controller.register);

app.get('/tokentest', controller.tokentest);






