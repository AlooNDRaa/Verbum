"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chat_controller_1 = require("../../controllers/chat.controller");
const Routers = express_1.default.Router();
Routers.post('/messages', (req, res) => {
    (0, chat_controller_1.createmessages)(req, res);
});
Routers.get("/userchat", (req, res) => {
    (0, chat_controller_1.getUserList)();
});
Routers.get('/getid', (req, res) => {
    (0, chat_controller_1.getUserIdByUsername)(req, res);
});
exports.default = Routers;
