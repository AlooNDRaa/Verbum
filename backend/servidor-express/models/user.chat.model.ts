import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface usersAttributes {
  id: number;
  username: string;

}

class users extends Model<usersAttributes> {
  public id!: number;
  public username!: string;
}

users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  },
  {
    sequelize,
    modelName: 'User',
    timestamps: false
  }
);



export default users;