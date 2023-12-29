require('dotenv').config();
const express = require('express');
const  allRoutes = require('./routes/index');
const connectDb = require('./db/dbConnection');

const app = express();

app.use(express.json());
connectDb;

app.use("/api/bms/",allRoutes);
app.listen(process.env.PORT,()=>{
    console.log(`This server is listenning on port ${process.env.PORT}`);
});





