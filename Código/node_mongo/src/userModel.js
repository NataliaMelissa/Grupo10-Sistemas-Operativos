//Variables
const mongoose = require("mongoose") //Importar la librería mongoose
console.log("(userModel) Crear la variable mongoose");

//Crear el schema users de la BD
const usersSchema = new mongoose.Schema(
    {
        username: { type:String},
        name: { type:String},
        email: { type:String},
        password: {type:String},
        active: { type: Boolean, default: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
)
console.log("Crear el schema users para la BD");

const ModelUser = mongoose.model("users", usersSchema); //Mapear el schema con la colección users de la BD
console.log("(userModel) Se mapeó el usersSchema con la colección de la BD");

module.exports = ModelUser; //Exportar el ModelUser
console.log("(userModel) Se exportó el modelo ModelUser");