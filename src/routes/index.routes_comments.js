const { Router } = require("express");
const router = Router();
const ModelComment = require("../models/commentModel.js");

// CRUD COMMENTS - CREATE A NEW COMMENT (POST):
router.post("/commentsPost", async (req, res) => {
    try {
        const body = req.body;
        const respuesta = await ModelComment.create(body);
        res.send(respuesta);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// CRUD COMMENTS - GET ALL COMMENTS (GET):
router.get("/commentsGet", async (req, res) => {
    try {
        const respuesta = await ModelComment.find({});
        res.send(respuesta);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// CRUD COMMENTS - GET ONE COMMENT (GET ONE):
router.get("/commentsGet/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const respuesta = await ModelComment.findOne({ _id: id });
        res.send(respuesta);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// CRUD COMMENTS - UPDATE A COMMENT (UPDATE):
router.put("/commentsUpdate/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const respuesta = await ModelComment.findOneAndUpdate({ _id: id }, body);
        res.send(respuesta);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// CRUD COMMENTS - DELETE A COMMENT (DELETE):
router.delete("/commentsDelete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const respuesta = await ModelComment.deleteOne({ _id: id });
        res.send(respuesta);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;