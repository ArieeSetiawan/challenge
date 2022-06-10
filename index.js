const express = require ("express");
const res = require("express/lib/response");
const app = express();
const PORT = 3000;
const itemRoutes= require ('./routes/items-routes');
const userRoutes= require ('./routes/user-routes');
const orderRoutes= require ('./routes/orders-routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/items', itemRoutes); 
app.use('/users', userRoutes); 
app.use('/orders', orderRoutes); 

app.get("/",(req,res)=>{
    res.send("TEST");
})

app.listen(PORT, ()=>{
    console.log("Server is running on port", PORT);
})