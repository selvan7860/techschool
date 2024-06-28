const express = require('express');
const mongoose = require('mongoose');
const router = require('./routers');
require('dotenv').config();
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended : true }));
app.use('/api', router);

mongoose.connect("mongodb://localhost:27017/techschool")
.then(() => {
    console.log("DB Connected")
}).catch((error) => {
    console.log(error)
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

app.listen(3000, () => {
    console.log("Server Connected")
})
