import mongoose, { Schema } from "mongoose";
import user from "./userModel";
import { Session } from "../constants/interfaces/models.interfaces";

const sessionSchema = new mongoose.Schema({
    _id : {
        type : Schema.Types.ObjectId
    },

    user_id : {
        type : Schema.Types.ObjectId,
        ref : user
    },

    token : {
        type : Schema.Types.String
    },

    expires_in : {
        type : Date,
        default : Date.now()
    }
})

const session  = mongoose.model<Session>("sessionSchema", sessionSchema);
export default session;