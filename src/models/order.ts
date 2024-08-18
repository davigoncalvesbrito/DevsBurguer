import { Model, DataTypes } from 'sequelize';
import { dbConnection } from '../dbconfig';

class Order extends Model {
  public id!: string;
  public userId!: number;
  public status!: string;
  public totalAmount!: number;
  public addressId!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Order.init(
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
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'pending', // outros valores possíveis: 'completed', 'cancelled'
    },
    totalAmount: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    addressId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    sequelize: dbConnection,
    modelName: 'Order',
    timestamps: true,
  },
);

export { Order };
