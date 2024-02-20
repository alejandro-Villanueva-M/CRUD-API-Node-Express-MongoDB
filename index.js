const express = require("express")
const app = express()
const Product= require('./models/product.model.js');
const mongoose = require("mongoose");
require('dotenv').config();

app.use(express.json());


app.get( '/', (req,res) =>{
    res.send("Hello from Node API Server Updated");
});


app.post('/api/products', async(req,res) =>{
    try {
        const product= await Product.create(req.body);
        res.status(200).json(product);
    } catch(error){
        res.status(500).json({message: error.message});
    };

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