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
const database_1 = __importDefault(require("../config/database"));
const user_chat_model_1 = __importDefault(require("./user.chat.model"));
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
}, {
    sequelize: database_1.default,
    modelName: 'Mensaje',
});
Mensaje.belongsTo(user_chat_model_1.default, { foreignKey: 'user_id' });
/*async function findUserById(user_id: number): Promise<void> {
  try {
    const user = await User.findByPk(user_id);
    if (user === null) {
      console.log('Not found!');
    } else {
      console.log(user instanceof User);
    }
  } catch (error) {
    console.error(error);
  }
}

findUserById(1); // Llama a la función con el ID deseado
*/
function findAllUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield user_chat_model_1.default.findAll();
            if (users.length === 0) {
                console.log('No users found!');
            }
            else {
                users.forEach(user => {
                    console.log(user instanceof user_chat_model_1.default);
                });
            }
        }
        catch (error) {
            console.error(error);
        }
    });
}
findAllUsers();
exports.default = Mensaje;
