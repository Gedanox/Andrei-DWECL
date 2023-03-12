const User = require("./usermodel");

exports.login = async (req, res) => {
    let user = await User.findOne({ "username": req.body.username});
    let password = await User.findOne({ "password": req.body.password});

    if ( user && password ){
        res.send({ data: user });
    } else {
        res.send({ data: "Incorrect password or user doesn't exists."});
    }
};

exports.register = async (req, res) => {
    let user = new User(req.body);
    await user.save();
    res.send({ data: user });
};