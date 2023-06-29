const express = require('express');
const router = express.Router();
const controller = require('../controllers');

router.get("/", (req, res)=>{
    controller.teamController.getTeams(res);
})

router.post("/create", (req, res)=>{
    controller.teamController.createTeam(req.body, res);
})

router.put("/:id", (req, res)=>{
    controller.teamController.updateTeam(req, res);
})

router.delete("/:id", (req, res)=>{
    controller.teamController.deleteTeam(req, res);
})

module.exports = router;