// for creating the backend project first i have to understand the how to initialise you backend code first 
// using the npm init -y you are initializing your backend node.js application here 

const express = require('express');

const app = express();

const port = 5000;

app.get('/' , (req , res) => {
    res.send("This is my backend data here okay");  // using the arrow function instend of normal functions 
})


app.listen(port , () => {
    console.log(`My server is running on server`)
})