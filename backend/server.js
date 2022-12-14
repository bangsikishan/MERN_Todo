// IMPORT REQUIRED PACKAGES
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const todoRouter = require('./routes/todoRoute');
const userRouter = require('./routes/userRoute');


// INSTANTIATE AN EXPRESS APP
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// USE IMPORTED ROUTES
app.use(userRouter);
app.use(todoRouter);


// CONNECT TO THE DATABASE AND THEN LISTEN ON THE SPECIFIED PORT
mongoose.connect(process.env.URI)
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`[+] Listening on port ${process.env.PORT}`)
    })
})
.catch(err => console.log(err.message));
