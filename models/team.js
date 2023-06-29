const mongoose = require("mongoose");
const { Schema } = mongoose;

/*
{
id: 1,
abbreviation: "ATL",
city: "Atlanta",
conference: "East",
division: "Southeast",
full_name: "Atlanta Hawks",
name: "Hawks"
},
*/

const teamSchema = new Schema({
    id: {type: Number, trim: true, required: true, unique: true},
    abbreviation: {type: String},
    city: {type: String},
    conference: {type: String},
    division: {type: String},
    full_name: {type: String},
    name: {type: String}
});

module.exports = mongoose.model("teams", teamSchema);