"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("./userModel"));
const postModel_1 = __importDefault(require("./postModel"));
const mongoose_1 = __importStar(require("mongoose"));
const favouritesSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.Schema.Types.ObjectId
    },
    user_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: userModel_1.default
    },
    post_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: postModel_1.default
    },
    created_at: {
        type: mongoose_1.Schema.Types.Date,
        default: Date.now()
    }
});
const favourites = mongoose_1.default.model("favouritesSchema", favouritesSchema);
exports.default = favourites;
