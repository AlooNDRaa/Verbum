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
  }
);

async function findAllUsers(): Promise<void> {
  try {
    const users = await User.findAll();
    if (users.length === 0) {
      console.log('No users found!');
    } else { 
      users.forEach(user => {
        console.log(user instanceof User);
      });
    }
  } catch (error) {
    console.error(error);
  }
}


export default User;