//Variables
const mongoose = require("mongoose"); //Importar la librería para la conexión de la DB
console.log("(database.js) Se configuraron las variables");

//Establecer la conexión con la DB
mongoose.connect("mongodb://database//mydatabase")
.then(db=>console.log("BD conectada al host: ", db.connection.host))
.catch(err=>console.error("Hubo un error al intentar establecer la conexión: ", err));
console.log("(database.js) Se estableció la conexión con la BD");