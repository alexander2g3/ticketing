import mongoose from "mongoose";
import { app } from "./app";


const start = async () => {
    console.log('Auth service is starting up....')
    if (!process.env.JWT_KEY) {
        throw new Error('JWT_KEY must be defined')
    }

    if (!process.env.MONGO_URI) {
        throw new Error('MONGO_URI must be defined')
    }

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database connected!')
    } catch (err) {
        console.error(err)
    }
}

start();

app.listen(3000, () => {
    console.log('Listen on port 3000!!!')
});