const Product = require("../models/productModel");

module.exports.mostrar = async (req, res) => {
  try {
    const product = await Product.find({});
    res.render("product", { product }); // Cambia el nombre de la vista si es necesario
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los productos", error: error.message });
  }
};

module.exports.createProduct = async (req, res) => {
  try {
    const body = req.body;
    const respuesta = await Product.create(body);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el producto", error: error.message });
  }
};

module.exports.getAllProducts = async (req, res) => {
  try {
    const respuesta = await Product.find({});
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los producto", error: error.message });
  }
};

module.exports.getProductSById = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await Product.findOne({ _id: id });
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener el producto", error: error.message });
  }
};

module.exports.updateProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const respuesta = await Product.findOneAndUpdate({ _id: id }, body);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al actualizar el producto", error: error.message });
  }
};

module.exports.deleteProducts = async (req, res) => {
  try {
    const id = req.params.id;
    const respuesta = await Product.findByIdAndDelete(id);
    res.send(respuesta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al eliminar el producto", error: error.message });
  }
};
