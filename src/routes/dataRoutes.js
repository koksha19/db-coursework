const express = require('express');

const dataControllers = require('../controllers/dataControllers');

const router = express.Router();

router.get("/", dataControllers.getData);
router.get("/:id", dataControllers.getDataById);
router.post("/", dataControllers.postData);
router.put("/:id", dataControllers.putData);
router.delete("/", dataControllers.deleteData);

module.exports = router;