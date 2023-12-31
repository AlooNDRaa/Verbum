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
exports.getUserIdByUsername = exports.createmessages = exports.getUserList = void 0;
const chat_model_1 = __importDefault(require("../models/chat.model"));
const user_chat_model_1 = __importDefault(require("../models/user.chat.model"));
const database_1 = __importDefault(require("../config/database"));
function getUserList() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield user_chat_model_1.default.findAll({
                attributes: ['username'],
            });
            return users;
        }
        catch (error) {
            console.error('Error al obtener la lista de usuarios:', error);
            throw error;
        }
    });
}
exports.getUserList = getUserList;
function createmessages(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const transaction = yield database_1.default.transaction();
        try {
            const { message_content, user_id } = req.body;
            const isFromSocket = req.headers['user-agent'] && req.headers['user-agent'].includes('socket.io');
            if (isFromSocket) {
                const user = yield user_chat_model_1.default.findByPk(user_id);
                if (!user) {
                    return res.status(404).json({ error: 'Usuario no encontrado' });
                }
                const nuevoMensaje = yield chat_model_1.default.create({
                    user_id,
                    message_content,
                });
                yield transaction.commit();
                return res.status(201).json({ mensaje: 'Mensaje creado con éxito', nuevoMensaje });
            }
            return res.status(201).json({ mensaje: 'Mensaje recibido con éxito desde la interfaz web' });
        }
        catch (error) {
            yield transaction.rollback();
            console.error(error);
            return res.status(500).json({ error: 'Error en el servidor' });
        }
    });
}
exports.createmessages = createmessages;
function getUserIdByUsername(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { username } = req.query;
            if (!username) {
                return res.status(400).json({ error: 'El parámetro username es requerido' });
            }
            const user = yield user_chat_model_1.default.findOne({
                attributes: ['id'],
                where: { username: username },
            });
            if (!user) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }
            return res.status(200).json({ userId: user.id });
        }
        catch (error) {
            console.error('Error al obtener el ID del usuario por nombre de usuario:', error);
            return res.status(500).json({ error: 'Error en el servidor' });
        }
    });
}
exports.getUserIdByUsername = getUserIdByUsername;
