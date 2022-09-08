const getUsers = (req, res) => {
  res.status(200).send("All Users");
};

const getUser = (req, res) => {
  res.status(200).send("Get single Users");
};

const createUser = (req, res) => {
  res.status(201).send("Create user");
};

const updateUser = (req, res) => {
  res.status(200).send("Update user");
};

const deleteUser = (req, res) => {
  res.status(200).send("Delete user");
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
