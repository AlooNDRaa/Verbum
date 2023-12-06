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
const sequelize_1 = require("sequelize");
const user_chat_model_1 = __importDefault(require("./user.chat.model"));
<<<<<<< HEAD
const sequelize = new sequelize_1.Sequelize('verbum', 'root', '1234', {
=======
const sequelize = new sequelize_1.Sequelize('verbum', 'root', 'nebulosadelvelo2023', {
>>>>>>> 84d3f98abd8db513a2e094673799909e17147468
    host: 'localhost',
    dialect: 'mysql',
});
class Mensaje extends sequelize_1.Model {
}
Mensaje.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    user_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    message_content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'Mensaje',
    timestamps: false,
});
sequelize.sync().then(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Base de datos conectada arlu');
}));
Mensaje.belongsTo(user_chat_model_1.default, { foreignKey: 'user_id' });
exports.default = Mensaje;
