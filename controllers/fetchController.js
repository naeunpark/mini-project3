const models = require('../models');

const getApi = (req, res) => {
    let uri = `https://www.balldontlie.io/api/v1/players`;

    fetch(uri)
    .then(response => response.json())
    .then((json)=>{
        // add data to team collection
        json.data.forEach(item => {
            models.Team.findOne({id: {$eq: item.team.id}})
            .then(data=>{
                if(data == null){
                    let newTeam = {
                        id: item.team.id,
                        abbreviation: item.team.abbreviation,
                        city: item.team.city,
                        conference: item.team.conference,
                        division: item.team.division,
                        full_name: item.team.full_name,
                        name: item.team.name
                    }
                    
                    new models.Team(newTeam).save()
                    .then(()=>console.log("Team saved!"))
                }
            })
        });
        // add data to player collection
        json.data.forEach(item => {
            models.Player.findOne({id: {$eq: item.id}})
            .then(data=>{
                if(data == null){
                    let newPlayer = {
                        id: item.id,
                        first_name: item.first_name,
                        height_feet: item.height_feet,
                        height_inches: item.height_inches,
                        last_name: item.last_name,
                        position: item.position,
                        team_id: item.team.id
                    }
                    
                    //console.log(newValue);
                    new models.Player(newPlayer).save()
                    .then(()=>console.log("Player saved!"))
                }
            })
        });
    })
    .then(()=>res.send({result: 200, sucess: "data stored in DB successfully."}))
    .catch(error=>{
        console.log(`API Fetching error: ${error.message}`);
        res.send({result: 400, error: error.message})
    })
}

module.exports = {
    getApi
}