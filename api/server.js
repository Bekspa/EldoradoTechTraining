const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3001

const app = express();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('filmesdb', 'root', 'root', {
    dialect: 'mysql',
    host: '127.0.0.1'
})
  

app.use(bodyParser.json());

app.listen(3001, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        console.log(`Server is running on port ${port}`)
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }    
});

