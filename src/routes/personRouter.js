const express = require("express");
const CreatePersonController = require("../controllers/CreatePersonController");
const ListPersonController = require("../controllers/ListPersonController");
const UpdatePersonController = require("../controllers/UpdatePersonController");
const DeletePersonController = require("../controllers/DeletePersonController");

const router = express.Router();

const createPersonController = new CreatePersonController();
const listPersonController = new ListPersonController();
const updatePersonController = new UpdatePersonController();
const deletePersonController = new DeletePersonController();

router.post("/", createPersonController.handle);
router.get("/:id", listPersonController.handle);
router.patch("/:id", updatePersonController.handle);
router.delete("/:id", deletePersonController.handle);

module.exports = router;
