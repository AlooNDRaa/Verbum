import { Sequelize, Options } from 'sequelize';

const sequelize = new Sequelize('verbum', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;