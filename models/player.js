const mongoose = require("mongoose");
const { Schema } = mongoose;

/*
{
id: 14,
first_name: "Ike",
height_feet: null,
height_inches: null,
last_name: "Anigbogu",
position: "C",
team_id,
weight_pounds: null
},
*/

const playerSchema = new Schema({
    id: {type: Number, trim: true, required: true, unique: true},
    first_name: {type: String},
    last_name: {type: String},
    height_feet: {type: Number},
    height_inches: {type: Number},
    position: {type: String},
    weight_pounds: {type: Number},
    team_id: {type: String, ref: "teams"}
});

module.exports = mongoose.model("players", playerSchema);