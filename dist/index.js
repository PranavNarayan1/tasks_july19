"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const userModel_1 = __importDefault(require("./src/models/userModel"));
const sessionModel_1 = __importDefault(require("./src/models/sessionModel"));
const postModel_1 = __importDefault(require("./src/models/postModel"));
const followModel_1 = __importDefault(require("./src/models/followModel"));
const favouritesModel_1 = __importDefault(require("./src/models/favouritesModel"));
const actionModel_1 = __importDefault(require("./src/models/actionModel"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
mongoose_1.default
    .connect('mongodb://127.0.0.1:27017/social-networking-site')
    .then(() => {
    console.log("mongoDB connected successfully");
    userModel_1.default.createCollection;
    sessionModel_1.default.createCollection;
    postModel_1.default.createCollection;
    followModel_1.default.createCollection;
    favouritesModel_1.default.createCollection;
    actionModel_1.default.createCollection;
});
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
