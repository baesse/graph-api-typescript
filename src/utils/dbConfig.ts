import { Sequelize } from 'sequelize';

const dbInstance = new Sequelize('graph_dev', 'root', '75395146', {
    host: 'localhost',
    dialect: 'mysql',
});
export default dbInstance;
