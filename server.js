const express = require("express");
const app = express();
require('dotenv').config();
const dbConnect = require('./dbConnect');
const routers = require('./routers');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/fetch', routers.fetchRouter);
app.use('/api/players', routers.playerRouter);
app.use('/api/teams', routers.teamRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})