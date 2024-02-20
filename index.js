const express = require("express")
const app = express()
const Product= require('./models/product.model.js');
const productRoute=require('./routes/product.route.js');
const mongoose = require("mongoose");

//middleware
require('dotenv').config();
app.use(express.json());

// routes
app.use('/api/products', productRoute);

// testing server
app.get( '/', (req,res) =>{
    res.send("Hello from Node API Server Updated");
});


mongoose.connect(`mongodb+srv://jalejandrov98:${process.env.MONGODB}@backenddb.vrhcarl.mongodb.net/Node-API?retryWrites=true&w=majority`)
  .then(() => {
    console.log('Connected to the database!');
    app.listen(3000, () =>{

        console.log("Serve is running on port 3000");
    
    });
})
.catch (() => {
    console.log('Connection failed')
})