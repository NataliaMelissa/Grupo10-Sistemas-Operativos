const User = require("../models/userModel");

module.exports.mostrar = async (req, res) => {
  try {
    const users = await User.find({});
    res.render("users", { users }); // Cambia el nombre de la vista si es necesario
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los usuarios", error: error.message });
  }
};

module.exports.createUsers = async (req, res) => {
  try {
    const body = req.body;
    const respuesta = await User.create(body);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el usuario", error: error.message });
  }
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const respuesta = await User.find({});
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los usuario", error: error.message });
  }
};

module.exports.getUsersById = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await User.findOne({ _id: id });
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el usuario", error: error.message });
  }
};

module.exports.updateUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const respuesta = await User.findOneAndUpdate({ _id: id }, body);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el usuario", error: error.message });
  }
};

module.exports.deleteUsers = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await User.findByIdAndDelete(id);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el usuario", error: error.message });
  }
};
