//Variables
const {Router} = require ("express") //Importar la librería express
console.log("(index.router) Se importó la librería express");

const router = Router() //Crear la variable router
console.log("(index.router) Se creó la variable router = Router()");

//Función GET para lo primero que se ve al poner localhost:3000/
router.get("/", (req, res) => {
    res.send("CRUD - Grupo 10");
    console.log("(index.router) se envió la respuesta al GET para cuando se recibe /");
});

module.exports = router; //Exportar la variable al modelo
console.log("(index.router) se exportó el router con module.exports");