const express = require("express");
const router = express.Router();
const controllers = require("./controllers");

router.get("/", controllers.getAllBooks);
router.post("/", controllers.createBook);
router.get("/:bookId", controllers.getOneBook);
router.put("/:bookId", controllers.updateBook);
router.delete("/:bookId", controllers.deleteBook);

module.exports = router;
