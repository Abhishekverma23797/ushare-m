require('dotenv').config();
const mongoose = require('mongoose');


function connectDB(){
    // DataBase Connection
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
    const connection = mongoose.connection;

    connection.once('open',()=>{
        console.log('Database connected');
    }).catch(err => {
        console.log('Connection Failed');
    })

}

module.exports = connectDB;
