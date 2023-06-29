const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get("/players", (req, res)=>{
    controller.fetchController.getApi(req, res);
})

module.exports = router;