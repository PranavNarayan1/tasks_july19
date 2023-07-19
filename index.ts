import express, {Express} from "express";
import dotenv from 'dotenv';
import mongoose, { model } from "mongoose";
import user from "./src/models/userModel";
import session from "./src/models/sessionModel";
import post from "./src/models/postModel";
import follow from "./src/models/followModel";
import favourites from "./src/models/favouritesModel";
import actions from "./src/models/actionModel";

dotenv.config();
const app:Express = express();
const port = process.env.PORT;
app.use(express.json());


mongoose
    .connect('mongodb://127.0.0.1:27017/social-networking-site')
    .then(() => {
        console.log("mongoDB connected successfully")
        user.createCollection;
        session.createCollection;
        post.createCollection;
        follow.createCollection;
        favourites.createCollection;
        actions.createCollection;
    
    })


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})