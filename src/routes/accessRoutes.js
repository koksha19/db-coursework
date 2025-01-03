const express = require('express');

const accessControllers = require('../controllers/accessControllers');

const router = express.Router();

router.get("/", accessControllers.getAccess);
router.get("/:id", accessControllers.getAccessById);
router.post("/", accessControllers.postAccess);
router.put("/:id", accessControllers.putAccess);
router.delete("/", accessControllers.deleteAccess);

module.exports = router;