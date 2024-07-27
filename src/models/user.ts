import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../dbConfig'; // Corrija o caminho conforme necessário

class User extends Model {
  public id!: string;
  public name!: string;
  public phone!: string;
  public password!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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

// Método para formatar JSON em ordem
export function formatUser(user: User | null) {
  if (!user) return null;

  return {
    id: user.id,
    name: user.name,
    phone: user.phone,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}
