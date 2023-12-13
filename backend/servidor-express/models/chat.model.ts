import { DataTypes, Model, Sequelize } from 'sequelize';
import users from './user.chat.model';

const sequelize: Sequelize = new Sequelize('verbum', 'root', 'nebulosadelvelo2023', {
  host: 'localhost',
  dialect: 'mysql',
});


interface messagesAttributes {
  user_id: number;
  message_content: string;

}

class messages extends Model<messagesAttributes> {
  static transaction() {
    throw new Error('Method not implemented.');
  }
  public user_id!: number;
  public message_content!: string;

}

messages.init(
  {

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
    modelName: 'messages',
    timestamps: false,
  }
);


messages.belongsTo(users, { foreignKey: 'user_id' });

export default messages;
