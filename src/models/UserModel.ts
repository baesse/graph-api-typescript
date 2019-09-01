import { Model, DataTypes, CreateOptions } from 'sequelize';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';
import dbInstance from '../utils/dbConfig';

export interface UserInterface {
    id?: number;
    name?: string;
    email?: string;
    password?: string;
    photo?: string;
    createdAt?: string;
    updatedAt?: string;
    isPassword(encodedPassword: string, password: string): boolean;
}

class User extends Model implements UserInterface {
    constructor() {
        super();
        this.isPassword = this.isPassword;
    }

    public id!: number;

    public name!: string;

    public email!: string;

    public password!: string;

    public photo!: string;

    public isPassword(encodedPassword: string): boolean {
        return compareSync(this.password, encodedPassword);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(128),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(),
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        photo: {
            type: DataTypes.BLOB(),
            allowNull: false,
            defaultValue: null,
        },
    },
    {
        tableName: 'users',
        hooks: {
            beforeCreate: (user: User, options: CreateOptions): void => {
                const salt = genSaltSync();
                user.password = hashSync(user.password, salt);
            },
        },
        sequelize: dbInstance,
    },
);

export default User;
