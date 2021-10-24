const { User } = require("../models");

const userController = {
  getAllUser(req, res) {
    User.find({})
      // .populate({
      //   path: "thoughts",
      //   select: "-__v",
      // })
      .select("-__v")
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get one User by id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      //  .populate({
      //      path: 'thoughts',
      //      select: '-__v'
      //   })
      .select("-__v")
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // createUser
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(400).json(err));
  },
};

module.exports = userController;
