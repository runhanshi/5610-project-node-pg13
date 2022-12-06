import mongoose from "mongoose"
import express from 'express'
import UsersController from "./user/user-controller.js";
import cors from 'cors'
import session from 'express-session'

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}

mongoose.connect("mongodb+srv://runhanshi:970329@cluster0.jexfynk.mongodb.net/?retryWrites=true&w=majority", options);


const app = express();
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

app.use(session({
    secret: 'should be an environment variable',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))
app.use(express.json())

UsersController(app)
app.listen(4000)
