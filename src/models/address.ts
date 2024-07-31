import { Model, DataTypes } from 'sequelize';
import { dbConnection } from '../dbconfig';

class Address extends Model {
  public id!: string;
  public userId!: number;
  public cidade!: string;
  public bairro!: string;
  public rua!: string;
  public numero!: string;
  public pontoReferencia?: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Address.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bairro: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rua: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pontoReferencia: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: dbConnection,
    modelName: 'Address',
    timestamps: true,
  },
);

export { Address };
