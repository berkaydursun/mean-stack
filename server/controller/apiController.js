const User = require('../model/User');
const Admin = require('../model/Admin');

const {
    v4: uuidv4
} = require('uuid');

const jwt = require('jsonwebtoken');
const secretKey = require('crypto').randomBytes(64).toString('hex');


exports.addUser = (req, res) => {

    User.findOne({ username: req.body.username })
        .then(result => {
            if (result == null) {
                const user = new User({
                    _id: uuidv4(),
                    username: req.body.username,
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    avatar: req.body.avatar,
                    password: req.body.password
                })
                user.save()
                    .then((result) => { res.status(201).json(result) })
                    .catch((err) => console.log(err))
            } else {
                res.status(403).json('Please Enter Different Username ')
            }
        })

}

exports.getUsers = (req, res) => {
    User.find().sort({ createdAt: -1 })
        .then(result => res.json(result))
        .catch(err => console.log(err));
}

exports.getSingleUser = (req, res) => {
    User.findById(req.params.id)
        .then(result => result ? res.json(result) : res.status(404).json())
        .catch(err => console.log(err));
}

exports.updateUser = (req, res) => {
    var id = req.params.id;
    User.findByIdAndUpdate({ "_id": id }, req.body).then((newUser) => {
        newUser ? res.json("Successfully Updated") : res.status(400).json('Unsuccessfull');

    }).catch((err) => {
        res.json("There is a mistake while updating");
    })
}

exports.deleteUser = (req, res) => {
    User.findOneAndRemove({ "_id": req.params.id })
        .then(result => {
            result ? res.status(204).json('Successfully delete') : res.status(400).json('Unsuccessfull')
        })
        .catch(err => {
            console.log(err);
        })

}

exports.getAdmin = (req, res) => {
    Admin.find().sort({ createdAt: -1 })
        .then(result => res.json(result))
        .catch(err => console.log(err));
}

exports.login = (req, res) => {
    Admin.findOne({ username: req.body.username, password: req.body.password })
        .then(result => {
            console.log('Result = ', result)
            console.log(req.body);
            if (result !== null) {
                const token = jwt.sign(
                    { name: req.body.username }
                    , secretKey
                    , { expiresIn: 30 * 2, algorithm: 'HS256' }
                );
                res.status(200).json(token)
            } else {

                res.status(404).json('Unsuccessfull');
            }
        })
        .catch(err => {
            console.log(err);
        })
}

exports.createAdmin = (req, res) => {
    Admin.findOne({ username: req.body.username })
        .then(result => {
            if (result == null) {
                const admin = new Admin({
                    _id: uuidv4(),
                    username: req.body.username,
                    password: req.body.password

                })
                admin.save()
                    .then((result) => { res.status(200).json(result) })
                    .catch((err) => console.log(err))

            }
            else {
                res.status(403).json('Please Enter Different Username');
            }

        })
}