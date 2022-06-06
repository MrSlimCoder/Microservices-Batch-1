// const { compare } = require("../utils");
// const config = require("../config");
const User = require("../models/user");

exports.get = (req, res) => {
    console.log("Hello World");
    const data = req.body;
    data.delete = false;
    User.findOne(data, (err, user) => {
        if (err) {
            return res.status(400).send(err);
        }
        else if (user) {
            return res.status(200).json(user);
        }
        else {
            return res.status(400).send("Not Found");
        }
    })
}

exports.post = (req, res) => {
    const data = req.body;
    const user = new User(data);
    user.save();
    res.status(200).json(data);
}

exports.put = (req, res) => {
    const data = req.body;
    User.findOneAndUpdate(data, {
        name: "Vivek",
        email: "vivek@theslimcoder.com"
    }, { new: true }, (err, result) => {
        if (err) { return res.status(400).send(err); }
        else { return res.status(200).json(result); }
    })
}

exports.patch = (req, res) => {
    const data = req.body;
    User.findOneAndUpdate(data, {
        name: "Vivek"
    }, { new: true }, (err, result) => {
        if (err) { return res.status(400).send(err); }
        else { return res.status(200).json(result); }
    })
}

exports.delete = (req, res) => {
    const data = req.body;
    User.findOneAndUpdate(data, {
        delete: true
    }, { new: true }, (err, result) => {
        if (err) { return res.status(400).send(err); }
        else { return res.status(200).json(result); }
    })
}