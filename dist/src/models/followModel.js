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
const mongoose_1 = __importStar(require("mongoose"));
const userModel_1 = __importDefault(require("./userModel"));
const models_interfaces_1 = require("../constants/interfaces/models.interfaces");
const followSchema = new mongoose_1.default.Schema({
    _id: {
        type: mongoose_1.Schema.Types.ObjectId
    },
    sender_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: userModel_1.default
    },
    receiver_id: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: userModel_1.default
    },
    request_Status: {
        type: mongoose_1.Schema.Types.String,
        enum: [
            models_interfaces_1.REQUEST_STATUS.ACCEPTED,
            models_interfaces_1.REQUEST_STATUS.PENDING,
            models_interfaces_1.REQUEST_STATUS.REJECTED
        ]
    },
});
const follow = mongoose_1.default.model("followSchema", followSchema);
exports.default = follow;
