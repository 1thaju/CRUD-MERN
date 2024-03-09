const express = require("express");
const mongoose = require("mongoose");
const Product = require('./models/projectModels')
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/',(req,res)=>{
    res.send("hello User....?? ");
});

app.get('/blog',(req,res)=>{
    res.send("hello BlogUser");
});

app.post('/product',async(req,res) => {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product);

    }catch(error){
        console.log(error.message)
    }
});
app.get('/product',async(req,res) =>{
    try{
        const products = await Product.find({})
        res.status(200).json(products)
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
})
app.get('/product/:id',async(req,res) =>{
    try{
        const {id} = req.params;
        const product1 = await Product.findById(id)
        res.status(200).json(product1)
    }
    catch(error){
        res.status(500).json({message : error.message})
    }
})

app.put('/product/:id',async (req,res) =>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            return res.status(404)
        }
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message : message.json})
    }
})
app.delete('/product/:id',async (req,res) =>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404)
        }
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message : message.json})
    }
})

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/mydatabase').then(()=>{
    console.log("Connected to mongo DB");
}).catch((error)=>{
    console.log(error);
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
