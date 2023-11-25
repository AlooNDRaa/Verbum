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
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupUserRoutes = void 0;
// routes/userRoutes.ts
const express_1 = __importStar(require("express"));
const user_controller_1 = require("../../controllers/usercontroller/user.controller");
const router = (0, express_1.Router)();
const setupUserRoutes = (db) => {
    router.use(express_1.default.json());
    router.get('/user', (req, res) => (0, user_controller_1.getAllUsers)(db, req, res));
    router.post('/', (req, res) => (0, user_controller_1.createUser)(db, req, res));
    router.post('/log', (req, res) => (0, user_controller_1.loginUser)(db, req, res));
    return router;
};
exports.setupUserRoutes = setupUserRoutes;
