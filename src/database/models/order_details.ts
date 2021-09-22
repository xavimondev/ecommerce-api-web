import { Model, Sequelize, DataTypes, Optional } from 'sequelize';

type DataType = typeof DataTypes;

interface OrdersDetailsAttributes {
  id: number;
  title: string;
  amount: number;
  price: number;
  orderId: number;
}

interface OrdersDetailsCreationAttributes extends Optional<OrdersDetailsAttributes, "id"> {}

export default (sequelize: Sequelize, DataTypes: DataType) => {
  class OrdersDetails extends Model<OrdersDetailsAttributes,OrdersDetailsCreationAttributes> implements OrdersDetailsAttributes{

    public id!: number;
    public title!: string;
    public amount!: number;
    public price!: number;
    public orderId!: number;

    static associate(models: any) {
     OrdersDetails.belongsTo(models.Order);
    }
  };
  OrdersDetails.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    orderId: {
      type: DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'orders'
        },
        key: 'id'
      },
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'OrdersDetails',
    tableName: 'order_details'
  });
  return OrdersDetails;
};