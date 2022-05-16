// const { compare } = require("../utils");
// const config = require("../config");
const Details = require("../models/details");

exports.get = (req, res) => {
    // console.log(compare(1,2))
    const data = req.body;
    data.delete = false;
    Details.findOne(data, (err, details) => {
        if (err) {
            return res.status(400).send(err);
        }
        else if (details) {
            return res.status(200).json(details);
        }
        else {
            return res.status(400).send("Not Found");
        }
    })
}

exports.post = (req, res) => {
    const data = req.body;
    const details = new Details(data);
    details.save();
    res.status(200).json(data);
}

exports.put = (req, res) => {
    const data = req.body;
    Details.findOneAndUpdate(data, {
        name: "Uzair",
        lastName: "Khan",
        age: 26
    }, { new: true }, (err, result) => {
        if (err) { return res.status(400).send(err); }
        else { return res.status(200).json(result); }
    })
}

exports.patch = (req, res) => {
    const data = req.body;
    Details.findOneAndUpdate(data, {
        age: 27
    }, { new: true }, (err, result) => {
        if (err) { return res.status(400).send(err); }
        else { return res.status(200).json(result); }
    })
}

exports.delete = (req, res) => {
    const data = req.body;
    Details.findOneAndUpdate(data, {
        delete: true
    }, { new: true }, (err, result) => {
        if (err) { return res.status(400).send(err); }
        else { return res.status(200).json(result); }
    })
}