const {Router} = require ("express")

const router = Router()

router.get("/", (req, res)=> {
    res.send("CRUD - Grupo 10")
});

module.exports = router;