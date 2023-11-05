//Variables
const mongoose = require("mongoose"); //Importar la librería para la conexión de la DB

//Establecer la conexión con la DB
mongoose.connect("mongodb://localhost:27017/SO10")
.then(db=>console.log("BD conectada al host: ", db.connection.host))
.catch(err=>console.error("Hubo un error al intentar establecer la conexión: ", err));