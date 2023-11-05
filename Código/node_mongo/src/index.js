//Variables
const express = require("express"); //Importar el framework express
const app = express(); //Variable que va a controlar la aplicación
console.log("(index.js) Variables app y express creadas y configuradas...");

require("./database"); //Conozca el archivo database.js para que llame a la BD
console.log("(index.js) Se configuró la BD");

app.use(require("./routes/index.routes.js"));

app.listen(3000); //Indicar a la aplicación que escuche ese puerto para el servicio web
console.log("(index.js) Se configuró la aplicación para que escuche al puerto 3000");