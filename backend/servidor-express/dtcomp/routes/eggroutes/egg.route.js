"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupEggRoutesWithDb = void 0;
const express_1 = __importDefault(require("express"));
const egg_controller_1 = require("../../controllers/eegcontroller/egg.controller");
const dt_service_1 = require("../../dtservice/dt.service");
const router = express_1.default.Router();
const setupEggRoutesWithDb = (db) => {
    const dbService = new dt_service_1.DbService(db);
    router.use(express_1.default.json());
    router.post('/password', (req, res) => (0, egg_controller_1.getThePassword)(dbService, req, res));
    return router;
};
exports.setupEggRoutesWithDb = setupEggRoutesWithDb;
