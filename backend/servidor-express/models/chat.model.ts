import { DataTypes, Model, Sequelize } from 'sequelize';
import User from './user.chat.model';

const sequelize: Sequelize = new Sequelize('verbum', 'root', 'nebulosadelvelo2023', {
  host: 'localhost',
  dialect: 'mysql',
});

interface MensajeAttributes {
  id: number;
  user_id: number;
  message_content: string;
  createdAt?: Date;
  updatedAt?: Date;
}

class Mensaje extends Model<MensajeAttributes> {
  public id!: number;
  public user_id!: number;
  public message_content!: string;
  public createdAt!: Date;
  public updatedAt!: Date;
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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize,
    modelName: 'Mensaje',
    timestamps: false,
  }
);

sequelize.sync().then(async () => {
  console.log('Base de datos conectada arlu');
});

Mensaje.belongsTo(User, { foreignKey: 'user_id' });

export default Mensaje;
