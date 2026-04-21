const express = require("express");
const router = express.Router();

const courseController = require("../controllers/courseController");
const authCheck = require("../../middleware/auth-middleware");

router.get("/", authCheck, courseController.getAll);
router.get("/:id", authCheck, courseController.getById);
router.post("/", authCheck, courseController.create);
router.put("/:id", authCheck, courseController.update);
router.delete("/:id", authCheck, courseController.remove);

module.exports = router;