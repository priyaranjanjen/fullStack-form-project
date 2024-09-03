import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

import userRoutes from './routers/user.router.js';

const app = express();
const PORT = 8000;

// app.use(cors());
app.use(express.json());

const connectDb = async() => {
    try {
        await mongoose.connect(`mongodb://localhost:27017/user-db`)
        console.log("Connected to db")
    } catch (e) {
        console.log("Failed to connect to db", e);
    }
}

connectDb();

app.use(userRoutes)

app.listen(PORT, ()=>{
    console.log(`Listening to ${PORT}`)
});