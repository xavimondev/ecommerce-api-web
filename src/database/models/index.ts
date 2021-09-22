const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];

import customerModel from './customer';
import orderModel from './order';
import ordersDetailsModel from './order_details';

let sequelize = new Sequelize(config.database, config.username, config.password, config);

const db = {
  sequelize,
  Sequelize,
  Customer: customerModel(sequelize, Sequelize.DataTypes),
  Order: orderModel(sequelize, Sequelize.DataTypes),
  OrdersDetails: ordersDetailsModel(sequelize, Sequelize.DataTypes)
};

Object.values(db).forEach((modelName: any) => {
  if (modelName.associate) {
    modelName.associate(db);
  }
});

export default db;
