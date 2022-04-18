const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();
//Middlewares
//Routes
//PUERTO 8080
app.listen(PORT , () => {
    console.log('Server is up and running in port =>' , PORT);
});