import * as Sequelize from 'sequelize';
import ModelsInterface from './ModelsInterface';

export default interface DbConnection extends ModelsInterface {
    sequelize: Sequelize.Sequelize;
}
