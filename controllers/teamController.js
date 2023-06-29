'use strict';
const Models = require('../models');

const getTeams = (res) => {
    Models.Team.find({})
    .then(data=> res.send({result: 200, data: data}))
    .catch((error)=>{
        console.log(error.message);
        res.send({result: 500, error: error.message});
    })
};

const createTeam = (data, res) =>{
    new Models.Team(data).save()
    .then(data=>res.send({result: 200, data: data}))
    .catch(error =>{
        console.log(error.message);
        res.send({result: 500, error: error.message});
    })
}

const updateTeam = (req, res) =>{
    Models.Team.findOneAndUpdate({id:req.params.id}, req.body, {useFindAndModify: false})
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error. message})
    })
};

const deleteTeam = (req, res) => {
    Models.Team.findOneAndRemove({id:req.params.id}, {
        useFindAndModify: false
    })
    .then(data => res.send({result: 200, data: data}))
    .catch(error => {
        console.log(error);
        res.send({result: 500, error: error. message})
    })
}

module.exports = {
    getTeams, createTeam, updateTeam, deleteTeam
}