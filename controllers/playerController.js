'use strict';
const Models = require('../models');

const getPlayers = (res) => {
    Models.Player.find({})
    .then(data=> res.send({result: 200, data: data}))
    .catch((error)=>{
        console.log(error.message);
        res.send({result: 500, error: error.message});
    })
};

const createPlayer = (data, res) =>{
    new Models.Player(data).save()
    .then(data=>res.send({result: 200, data: data}))
    .catch(error =>{
        console.log(error.message);
        res.send({result: 500, error: error.message});
    })
}

const updatePlayer = (req, res) =>{
    Models.Player.findOneAndUpdate({id:req.params.id}, req.body, {useFindAndModify: false})
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error. message})
    })
};

const deletePlayer = (req, res) => {
    Models.Player.findOneAndRemove({id:req.params.id}, {
        useFindAndModify: false
    })
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error. message})
    })
}

module.exports = {
    getPlayers, createPlayer, updatePlayer, deletePlayer
}