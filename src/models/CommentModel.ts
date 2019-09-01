import { Model, DataTypes } from 'sequelize';
import dbInstance from '../utils/dbConfig';
import User from './UserModel';
import Post from './PostModel';

export interface CommentInterface {
    id?: number;
    comment?: string;
    post?: string;
    user?: string;
    createdAt?: string;
    updatedAt?: string;
}

class Comment extends Model implements CommentInterface {
    public id!: number;

    public title!: string;

    public content!: string;

    public photo!: string;

    public author!: string;
}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        comment: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        tableName: 'comments',

        sequelize: dbInstance,
    },
);
Comment.belongsTo(Post, {
    foreignKey: {
        allowNull: false,
        field: 'post',
        name: 'post',
    },
});
Comment.belongsTo(User, {
    foreignKey: {
        allowNull: false,
        field: 'use',
        name: 'use',
    },
});
