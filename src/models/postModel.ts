import mongoose, { Schema } from "mongoose";
import user from "./userModel";
import { Posts } from "../constants/interfaces/models.interfaces";

const postSchema = new mongoose.Schema({
    _id : {
        type : Schema.Types.ObjectId
    },

    user_id : {
        type : Schema.Types.ObjectId,
        ref : user
    },

    caption : {
        type : Schema.Types.String
    },

    post_url : {
        type : Schema.Types.String,
        require : true
    },

    likes_Count : {
        type : Schema.Types.Number
    },

    comments_Count : {
        type : Schema.Types.Number,
    },

    created_At : {
        type : Date,
        default : Date.now()
    }

})

const post = mongoose.model<Posts>("postSchema", postSchema);
export default post;