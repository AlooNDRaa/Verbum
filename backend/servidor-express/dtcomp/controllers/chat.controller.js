"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createmessages = void 0;
const chat_model_1 = __importDefault(require("../models/chat.model"));
const user_chat_model_1 = __importDefault(require("../models/user.chat.model"));
const createmessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { message_content, user_id } = req.body;
        const user = yield user_chat_model_1.default.findByPk(user_id);
        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }
        const nuevoMensaje = yield chat_model_1.default.create({
            user_id,
            message_content,
        });
        return res.status(201).json({ mensaje: 'Mensaje creado con éxito', nuevoMensaje });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Error en el servidor' });
    }
});
exports.createmessages = createmessages;
