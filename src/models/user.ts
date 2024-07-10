import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../dbConfig'; // Corrija o caminho conforme necessário

class User extends Model {
  public id!: string;
  public name!: string;
  public phone!: string;
  public password!: string;
  public address!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.STRING,
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
    address: {
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
