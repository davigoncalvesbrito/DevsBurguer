import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../dbconfig';

class Product extends Model {
  public id!: string;
  public name!: string;
  public description!: string;
  public price!: number;
  public category!: string;
  public image?: string;
  public available!: boolean;
  public quantityAvailable!: number;
  public ingredients?: string[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Product.init(
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
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
    available: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true, // ou false, dependendo da lógica de disponibilidade inicial
    },
    quantityAvailable: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    ingredients: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  },
  {
    sequelize,
    modelName: 'Product',
    timestamps: true,
  },
);

export { Product };
