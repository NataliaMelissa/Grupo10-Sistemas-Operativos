//Variables
const { Router } = require("express");
const router = Router();

const ModelUsers = require("../models/usersModel.js");
const UsersController = require("../controllers/UsersController.js");


// Mostrar la vista de reviews
router.get("/users", UsersController.mostrar);

// CRUD USUARIOS - CREAR UN NUEVO USUARIO (POST):
router.post("/usersPost", UsersController.createUsers);

// CRUD USUARIOS - OBTENER TODOS LOS USUARIOS (GET):
router.get("/usersGet", UsersController.getAllUsers);

// CRUD USUARIOS - OBTENER SÓLO 1 USUARIO (GET ONE):
router.get("/usersGet/:id", UsersController.getUSersById);

// CRUD USUARIOS - ACTUALIZAR UN USUARIO (UPDATE):
router.put("/usersUpdate/:id", UsersController.updateUsers);

// CRUD USUARIOS - BORRAR UN USUARIO (DELETE):
router.delete("/usersDelete/:id", UsersController.deleteUsers);

module.exports = router;
