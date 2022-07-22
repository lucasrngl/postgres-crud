const express = require("express");
const CreateCarController = require("../controllers/CreateCarController");
const ListCarController = require("../controllers/ListCarController");
const UpdateCarController = require("../controllers/UpdateCarController");
const DeleteCarController = require("../controllers/DeleteCarController");

const router = express.Router();

const createCarController = new CreateCarController();
const listCarController = new ListCarController();
const updateCarController = new UpdateCarController();
const deleteCarController = new DeleteCarController();

router.post("/", createCarController.handle);
router.get("/:id", listCarController.handle);
router.patch("/:id", updateCarController.handle);
router.delete("/:id", deleteCarController.handle);

module.exports = router;
