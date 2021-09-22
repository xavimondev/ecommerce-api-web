import { Model, Sequelize, DataTypes, Optional } from 'sequelize';
import db from '.';

type DataType = typeof DataTypes;
type OrdersDetails = typeof db.OrdersDetails;

// These are all the attributes in the User model
interface OrderAttributes {
  id: number;
  customerId: number;
  details?: OrdersDetails[]
}

// Some attributes are optional in `User.build` and `User.create` calls
interface OrderCreationAttributes extends Optional<OrderAttributes, "id"> {}

export default (sequelize: Sequelize, DataTypes: DataType) => {
  class Order extends Model<OrderAttributes, OrderCreationAttributes> implements OrderAttributes {
    
    public id!: number;
    public customerId!: number;

    static associate(models: any) {
      Order.belongsTo(models.Customer);
      Order.hasMany(models.OrdersDetails,{
        foreignKey:{
          name: 'orderId',
          allowNull: false,
        },
        as: 'details'
      })
    }
  };
  Order.init({
   id: {
     type: DataTypes.INTEGER,
     primaryKey: true,
     autoIncrement: true,
        allowNull: false,
    },
  customerId: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'customers'
          },
          key: 'id'
        },
        allowNull: false
      },
  }, {
    sequelize,
    modelName: 'Order',
    tableName: 'orders'
  });
  return Order;
};