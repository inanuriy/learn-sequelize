const express = require("express");
const router = express.Router()

router.get("/", require("./controller").getAll);
router.get("/:id", require("./controller").getById);
router.post("/", require("./controller").addData);
router.put("/:id", require("./controller").updateData);
router.delete("/:id", require("./controller").deleteData);

module.exports = router;