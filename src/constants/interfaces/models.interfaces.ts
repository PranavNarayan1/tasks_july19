import { Date, Schema } from "mongoose";

export enum ACTION_TYPE {
    LIKE = "LIKE",
    COMMENT = "COMMENT"
}

export enum REQUEST_STATUS {
    PENDING = "PENDING",
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED"
}

export interface User {
    _id: Schema.Types.ObjectId;
    username: String;
    email: String;
    password: String;
    profile_url: String;
    isPrivate: Boolean;
    follower_count: Number;
    following_count: Number;
}

export interface Session {
    _id : Schema.Types.ObjectId;
    user_id: Schema.Types.ObjectId;
    token: String;
    expires_in: Date;
}

export interface Favourites {
    _id : Schema.Types.ObjectId;
    user_id : Schema.Types.ObjectId;
    post_id : Schema.Types.ObjectId;
    created_at : Date;
}

export interface Follow { 
    _id :Schema.Types.ObjectId;
    sender_id : Schema.Types.ObjectId;
    receiver_id : Schema.Types.ObjectId;
    req_Status : REQUEST_STATUS;
}

export interface Posts {
    _id : Schema.Types.ObjectId;
    user_id : Schema.Types.ObjectId;
    caption : String;
    post_url : String;
    likes_Count : Number;
    comments_Count : Number;
    created_at  : Date;
}

export interface Actions { 
    _id :Schema.Types.ObjectId;
    user_id : Schema.Types.ObjectId;
    post_id : Schema.Types.ObjectId;
    action_type : ACTION_TYPE;
    like : Boolean;
    comment_Content : String;
    replies : Replies;
}

export interface Replies {
    _id : Schema.Types.ObjectId;
    user_id : Schema.Types.ObjectId;
    content : String;
}