import { DataTypes, Model, Sequelize } from 'sequelize';

import   User   from './user.chat.model';

const sequelize = new Sequelize('verbum', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});


interface MensajeAttributes {
  id: number;
  message_content: string;
  user_id: number;
}

class Mensaje extends Model<MensajeAttributes> {
  public id!: number;
  public message_content!: string;
  public user_id!: number;
}

Mensaje.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    message_content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Mensaje',
  }
);

Mensaje.belongsTo(User, { foreignKey: 'user_id' });




export default Mensaje;