//Variables
const {Router} = require ("express") //Importar la librería express
console.log("(index.router) Se importó la librería express");

const router = Router() //Crear la variable router
console.log("(index.router) Se creó la variable router = Router()");

const ModelReview = require("../reviewModel.js"); //Llamar al modelo users de la BD
console.log("(index.router) Llamar a reviewModel para obtener el schema reviews");

//CRUD REVIEWS - CREAR UN NUEVO REVIEW (POST):
router.post("/reviewsPost", async(req, res) => {
    console.log("(index.router) Se ingresó a la función POST para crear un nuevo review");

    const body = req.body; //Recibir el body del request
    console.log("(index.router) Se recibió el body de la función");

    const respuesta = await ModelReview.create(body); //Crear un registro en la BD con el body recibido
    console.log("(index.router) Se creó el registro en la BD con el body recibido");

    res.send(respuesta); //Mostrar la respuesta en pantalla
    console.log("(index.router) Se envió la respuesta a la página");
})


//CRUD REVIEWS - OBTENER TODOS LOS REVIEWS (GET):
router.get("/reviewsGet", async(req, res) => {
    console.log("(index.router) Se ingresó a la función GET para obtener todos los reviews");

    const respuesta = await ModelReview.find({}); //Obtener todos los registros de la colección users de la BD
    console.log("(index.router) Se trajeron todos los registros de la colección reviews");

    res.send(respuesta); //Mostrar la respuesta en pantalla
    console.log("(index.router) Se envió la respuesta a la página");
})


//CRUD REVIEWS - OBTENER SÓLO 1 REVIEW (GET ONE):
router.get("/reviewsGet:id", async(req, res) => {
    console.log("(index.router) Se ingresó a la función GET para obtener sólo 1 review en base al id");

    const id = req.params.id; //Obtener el parámetro username del request
    console.log("(index.router) Se obtuvo el id de los parámetros del request");

    const respuesta = await ModelReview.findOne({ _id: id}); //Buscar el registro en la colección reviews de la BD
    console.log("(index.router) Se obtuvo el registro en base al parámetro id: " + id.toString());

    res.send(respuesta); //Mostrar la respuesta en pantalla
    console.log("(index.router) Se envió la respuesta a la página");
})


//CRUD REVIEWS - ACTUALIZAR UN REVIEW (UPDATE):
router.put("/reviewsUpdate:id", async(req, res) => {
    console.log("(index.router) Se ingresó a la función UPDATE para actualizar los valores de un review");

    const id = req.params.id; //Obtener el parámetro username del request
    console.log("(index.router) Se obtuvo el id de los parámetros del request");

    const body = req.body; //Recibir el body del request
    console.log("(index.router) Se recibió el body de la función");

    const respuesta = await ModelReview.findOneAndUpdate({ _id: id}, body); //Buscar el registro en la colección users de la BD y actualizarlo
    console.log("(index.router) Se actualizó el registro con el id: " + id.toString());

    res.send(respuesta); //Mostrar la respuesta en pantalla
    console.log("(index.router) Se envió la respuesta a la página");
})

//CRUD REVIEWS - BORRAR UN REVIEW (DELETE):
router.delete("/reviewDelete:id", async(req, res) => {
    console.log("(index.router) Se ingresó a la función DELETE para borrar un review");

    const id = req.params.id; //Obtener el parámetro username del request
    console.log("(index.router) Se obtuvo el id de los parámetros del request");

    const respuesta = await ModelReview.deleteOne({ _id: id}); //Buscar el registro en la colección users de la BD y borrarlo
    console.log("(index.router) Se eliminó el registro con el id: " + id.toString());

    res.send(respuesta); //Mostrar la respuesta en pantalla
    console.log("(index.router) Se envió la respuesta a la página");
})

module.exports = router; //Exportar la variable al modelo
console.log("(index.router) se exportó el router con module.exports");