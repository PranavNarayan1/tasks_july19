import mongoose, { Schema } from "mongoose";
import { User } from "../constants/interfaces/models.interfaces";




const userSchema = new mongoose.Schema({
    _id : {
        type : Schema.Types.ObjectId
    },

    username : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    profile_url : {
        type : String,
    },
    follower_count : {
        type : Number,
    },
    following_count : {
        type : Number
    }

})

const user = mongoose.model<User>("userSchema", userSchema);
export default user;