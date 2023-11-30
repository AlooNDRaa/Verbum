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
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.createUser = exports.getAllUsers = void 0;
const user_model_1 = require("../../models/user.model");
const userModel = (0, user_model_1.createUserModel)();
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield userModel.getAllUsers();
        res.send(users);
    }
    catch (err) {
        console.error('Error al obtener usuarios', err);
        res.status(500).json({ message: 'Error al obtener usuarios' });
    }
});
exports.getAllUsers = getAllUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        yield userModel.createUser(userData);
        console.log('Registro exitoso');
        res.status(200).json({ message: 'Registro exitoso' });
    }
    catch (err) {
        console.error('Error al guardar en la base de datos', err);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
});
exports.createUser = createUser;
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const message = yield userModel.loginUser(email, password);
        res.status(200).json({ message });
    }
    catch (err) {
        console.error('Error al iniciar sesión', err);
        res.status(401).json({ message: err });
    }
});
exports.loginUser = loginUser;
