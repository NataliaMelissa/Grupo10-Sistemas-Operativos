const mongoose = require("mongoose")
console.log("(userModel) Crear la variable mongoose");

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

const ModelUser = mongoose.model("users", usersSchema);

module.exports = ModelUser;
