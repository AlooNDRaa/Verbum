"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chat_controller_1 = require("../../controllers/chat.controller");
const setupChatRoutes = express_1.default.Router();
setupChatRoutes.post('/messages', (req, res) => {
    (0, chat_controller_1.createmessages)(req, res);
});
exports.default = setupChatRoutes;
