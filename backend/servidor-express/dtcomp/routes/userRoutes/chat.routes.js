"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const chat_controller_1 = require("../../controllers/chat.controller");
const router = express_1.default.Router();
router.post('/mensajes', (req, res) => {
    (0, chat_controller_1.createMensaje)(req, res);
});
exports.default = router;
