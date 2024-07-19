const express = require('express');
const bodyParser = require('body-parser'); 

const sequelize = require('./util/database');

const noteRoutes = require('./route/note');

var cors = require('cors');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors()); 

app.use('/note',noteRoutes);

sequelize.sync()
.then(()=>{
    app.listen(3001,()=>{
        console.log('server is listening');
    })
})
.catch(err=>{
    console.log(err);
})