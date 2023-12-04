import { Sequelize } from 'sequelize';

const sequelize: Sequelize = new Sequelize('verbum', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;