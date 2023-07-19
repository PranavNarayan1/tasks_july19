import user from "./userModel";
import post from "./postModel";
import { Favourites } from "../constants/interfaces/models.interfaces";
import mongoose, { Schema } from "mongoose";

const favouritesSchema = new mongoose.Schema({

    _id : {
        type : Schema.Types.ObjectId
    },
    user_id : {
        type : Schema.Types.ObjectId,
        ref : user
    },
    post_id : {
        type : Schema.Types.ObjectId,
        ref : post
    },
    created_at : {
        type : Schema.Types.Date,
        default : Date.now()
    }

})

const favourites = mongoose.model<Favourites>("favouritesSchema", favouritesSchema);
export default favourites;