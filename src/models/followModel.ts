import mongoose, { Schema } from 'mongoose';
import user from './userModel';
import { Follow, REQUEST_STATUS } from '../constants/interfaces/models.interfaces';

const followSchema = new mongoose.Schema({

    _id : {
        type : Schema.Types.ObjectId
    },

    sender_id : {
        type : Schema.Types.ObjectId,
        ref : user
    },

    receiver_id : {
        type : Schema.Types.ObjectId,
        ref : user
    },

    request_Status : {
        type : Schema.Types.String,
        enum : [
            REQUEST_STATUS.ACCEPTED,
            REQUEST_STATUS.PENDING,
            REQUEST_STATUS.REJECTED
        ]
    },

})

const follow = mongoose.model<Follow>("followSchema", followSchema);
export default follow;