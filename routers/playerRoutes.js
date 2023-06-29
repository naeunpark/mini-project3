const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get("/", (req, res)=>{
    controller.playerController.getPlayers(res);
})

router.post("/create", (req, res)=>{
    controller.playerController.createPlayer(req.body, res);
})

router.put("/:id", (req, res)=>{
    controller.playerController.updatePlayer(req, res);
})

router.delete("/:id", (req, res)=>{
    controller.playerController.deletePlayer(req, res);
})

module.exports = router;