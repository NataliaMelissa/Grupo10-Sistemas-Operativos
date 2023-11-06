//Variables
const express = require("express"); //Importar el framework express
const app = express(); //Variable que va a controlar la aplicación
console.log("(index.js) Variables app y express creadas y configuradas...");

require("./database"); //Conozca el archivo database.js para que llame a la BD
console.log("(index.js) Se configuró la BD");

//Llamar los elemenos que requiere la aplicación:
app.use(express.json()); //Llamar a json para poder hacer los mapeos
console.log("(index.js) se indicó que se debe utilizar express.json");

app.use(require("./routes/index.routes.js")) //Llamar a los servicios
console.log("(index.js) se llamó al archivo routes.js");

app.use(require("./userModel.js")); //Llamar al userModel
console.log("(index.js) se llamó al archivo userModel.js");

app.use(require("./reviewModel.js"));
console.log("(index.js) se llamó al archivo reviewModel.js");

app.listen(3000); //Indicar a la aplicación que escuche ese puerto para el servicio web
console.log("(index.js) Se configuró la aplicación para que escuche al puerto 3000");