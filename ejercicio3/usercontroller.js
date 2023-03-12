const User = require("./usermodel");
const jwt = require('jsonwebtoken');
require('dotenv').config();
var payload;
var jwtoken;

exports.login = async (req, res) => {
    let user = await User.findOne({ "username": req.body.username});
    let password = await User.findOne({ "password": req.body.password});

    if ( user && password ){
        payload = { user };
        jwtoken = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: 30000 });
        //console.log(process.env.TOKEN_SECRET);
        res.send({ data: "Logged in successfully",
                   token: jwtoken
        });
    } else {
        res.send({ data: "Incorrect password or user doesn't exists."});
    }
};

exports.register = async (req, res) => {
    let user = new User(req.body);
    await user.save();
    res.send({ data: user });
};

exports.tokentest = async (req, res) => {
    let bearer = req.headers['x-access-token'] || req.headers['authorization'];
    bearer = bearer.slice(7,jwtoken);
    if (jwt.verify( bearer, process.env.TOKEN_SECRET )) {
        res.send({ data: "Valid token"});
    } else {
        res.send({ data: "NOT a valid token"});
    }
};