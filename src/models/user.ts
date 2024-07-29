import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../dbConfig';
import { Address } from './address';

class User extends Model {
  public id!: number;
  public name!: string;
  public phone!: string;
  public password!: string;
  public addresses?: Address[];

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'User',
  },
);

export { User };
