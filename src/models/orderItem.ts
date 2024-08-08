import { Model, DataTypes } from 'sequelize';
import { dbConnection } from '../dbconfig';
import { Order } from './order';
import { Product } from './product';

class OrderItem extends Model {
  public orderId!: string;
  public productId!: string;
  public quantity!: number;
  public price!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

OrderItem.init(
  {
    orderId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Orders',
        key: 'id',
      },
    },
    productId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Products',
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize: dbConnection,
    modelName: 'OrderItem',
    timestamps: true,
  },
);

export { OrderItem };
