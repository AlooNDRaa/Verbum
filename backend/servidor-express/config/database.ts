import { Sequelize } from 'sequelize';

const sequelize: Sequelize = new Sequelize('verbum', 'root', 'nebulosadelvelo2023', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
}
});

export default sequelize;