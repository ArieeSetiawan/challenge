require('dotenv').config();
const express = require ("express");
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

//npm i pg
//npm i dotenv
//npm i --save sequelize && --save pg pg-hstore
//npm i sequelize-cli --save-dev (npx sequlize-cli init
//npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string