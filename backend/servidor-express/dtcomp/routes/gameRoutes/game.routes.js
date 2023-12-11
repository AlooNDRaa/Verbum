"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const game_controller_1 = require("../../controllers/gamecontroller/game.controller");
const game_controller_2 = require("../../controllers/gamecontroller/game.controller");
const router = express_1.default.Router();
router.use(express_1.default.json());
router.get('/game-users', (req, res) => (0, game_controller_1.getGameUsers)(req, res));
router.post('/movimientos', (req, res) => (0, game_controller_2.saveMovimientos)(req, res));
exports.default = router;
