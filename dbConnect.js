'use strict';
const Mongoose = require('mongoose');
const uri = process.env.DB_HOST || "mongodb://127.0.0.1:27017/basketball";

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

Mongoose.connect(uri, mongooseOptions)
.then(()=>console.log(`MongoDB connected successfully.`))
.catch((error)=>console.log(`MongoDB connection error: ${error.message}`));

Mongoose.connection.on('error', console.error.bind(console, "MongoDB connection error: "));

module.exports = Mongoose;