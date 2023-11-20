//Variables
const { Router } = require("express");
const router = Router();

const ModelProducts = require("../models/productModel.js");
const ProductsController = require("../controllers/ProductController.js");


// Mostrar la vista de reviews
router.get("/products", ProductsController.mostrar);

// CRUD PRODUCTOS - CREAR UN NUEVO PRODUCTO (POST):
router.post("/productsPost", ProductsController.createProducts);

// CRUD PRODUCTOS - OBTENER TODOS LOS PRODUCTOS (GET):
router.get("/productsGet", ProductsController.getAllProducts);

// CRUD PRODUCTOS - OBTENER SÓLO 1 PRODUCTO (GET ONE):
router.get("/productsGet/:id", ProductsController.getProductsById);

// CRUD PRODUCTOS - ACTUALIZAR UN PRODUCTO (UPDATE):
router.put("/productsUpdate/:id", ProductsController.updateProducts);

// CRUD PRODUCTOS - BORRAR UN PRODUCTO (DELETE):
router.delete("/productsDelete/:id", ProductsController.deleteProducts);

module.exports = router;