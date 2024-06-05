import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import settingsRouter from './routes/settings.js'
import { userRouter } from './routes/users.js'
import { recipesRouter } from './routes/recipes.js'
import favoritesRouter from './routes/favorites.js'
import dotenv from 'dotenv'

const app=express()
dotenv.config();
app.use(express.json())
app.use(cors())
app.use("/auth", userRouter)
app.use("/recipes", recipesRouter)
app.use("/favorites", favoritesRouter); 
app.use('/settings', settingsRouter);
async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGODB_URL)
        app.listen(3009,()=> console.log("SERVER STARTED"))
    }catch(err){
        console.log(err);
    }
}
connectDB();