/*import { DataTypes } from 'sequelize';
import sequelize from '../config/database';
import { User }  from './user.model';


const Mensaje = sequelize.define('Mensaje', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    message_content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

Mensaje.belongsTo(User, { foreignKey: 'user_id' });

export default Mensaje;*/