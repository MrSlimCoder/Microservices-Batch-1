const express = require("express");

const controllers = require("../controllers/details");

const router = express.Router();

router.get("/", controllers.get);

router.post("/", controllers.post);

router.put("/", controllers.put);

router.patch("/", controllers.patch);

router.delete("/", controllers.delete);

module.exports = router;