const express = require("express")
const app = express()

//Conexion a BD
require("./database")

// Motor de Plantillas: EJS
app.set("view engine", "ejs")
app.set("views", __dirname + "/views");


//Usp de formato json
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static("./src/public"))

const alumnoRouter = require("./routes/index.route.js")
app.use(alumnoRouter)

app.use(require("./routes/index.routes_users.js")) 
app.use(require("./routes/index.routes_publications.js")) 
app.use(require("./routes/index.routes_reviews.js"))
app.use(require("./routes/index.routes_products.js"))
app.use(require("./routes/index.routes_ratings.js"))
app.use(require("./routes/index.routes_comments.js"))

app.use(require("./models/userModel.js")); //Llamar al userModel
app.use(require("./models/reviewModel.js"));

// Prueba de Respuesta en Pagina Inicial
app.get("/", (req, res)=>{
    res.send("Bienvenidos Alumnos :) !!!")
})

app.listen(3000, ()=>{
    console.log("¡Server UP! en http://localhost:3000/")
})