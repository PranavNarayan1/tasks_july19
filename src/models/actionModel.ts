import mongoose, { Schema } from "mongoose";
import user from "./userModel";
import post from "./postModel";
import { ACTION_TYPE, Actions } from "../constants/interfaces/models.interfaces";

const replySchema = new mongoose.Schema({

    _id : {
        type : Schema.Types.String
    },
    user_id : {
        type : Schema.Types.ObjectId,
        ref  :user
    },
    content : {
        type : Schema.Types.String
    }

})

const actionSchema = new mongoose.Schema({

    _id : {
        type : Schema.Types.String
    },
    user_id : {
        type : Schema.Types.ObjectId,
        ref : user
    },
    post_id : {
        type : Schema.Types.ObjectId,
        ref : post
    },
    action_type : {
        type : Object.values(ACTION_TYPE)
    },
    like : {
        type : Schema.Types.Boolean
    },
    comment_content : {
        type : Schema.Types.String
    },
    created_at : {
        type : Schema.Types.Date,
        default : Date.now()
    },
    replies : {
        type : replySchema
    }

})

const actions = mongoose.model<Actions>("actionSchema", actionSchema);
export default actions;