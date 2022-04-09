// const { compare } = require("../utils");
const config = require("../config");

exports.get = (req, res) => {
    // console.log(compare(1,2))
    res.status(200).json(config.myDetails);
}

exports.post = (req, res) => {
    const data = req.body;
    res.status(200).json(data);
}

exports.put = (req, res) => {
    config.myDetails.name = "Uzair";
    config.myDetails.lastName = "Khan";
    config.myDetails.age = 26;
    res.status(200).json(config.myDetails);
}

exports.patch = (req, res) => {
    config.myDetails.name = "Uzair";
    res.status(200).json(config.myDetails);
}

exports.delete = (req, res) => {
    delete config.myDetails.name;
    res.status(200).json(myDetails);
}