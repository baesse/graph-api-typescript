import { Model, DataTypes } from 'sequelize';
import dbInstance from '../utils/dbConfig';
import User from './UserModel';

export interface PostInterface {
    id?: number;
    title?: string;
    content?: string;
    photo?: string;
    author?: string;
    createdAt?: string;
    updatedAt?: string;
}

class Post extends Model implements PostInterface {
    public id!: number;

    public title!: string;

    public content!: string;

    public photo!: string;

    public author!: string;
}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        photo: {
            type: DataTypes.BLOB({
                length: 'long',
            }),
            allowNull: false,
        },
    },
    {
        tableName: 'posts',

        sequelize: dbInstance,
    },
);
Post.belongsTo(User, {
    foreignKey: {
        allowNull: false,
        field: 'author',
        name: 'author',
    },
});

export default Post;
