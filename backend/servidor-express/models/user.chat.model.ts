import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

interface UserAttributes {
  id: number;
  username: string;

}

class User extends Model<UserAttributes> {
  public id!: number;
  public username!: string;
}

User.init(
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



export default User;