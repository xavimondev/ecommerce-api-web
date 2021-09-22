
import { Model, Sequelize, DataTypes, Optional } from 'sequelize';

type DataType = typeof DataTypes;

// These are all the attributes in the User model
interface CustomerAttributes {
  id: number;
  name: string;
  lastName: string;
  email: string;
  address: string;
}

// Some attributes are optional in `User.build` and `User.create` calls
interface CustomerCreationAttributes extends Optional<CustomerAttributes, "id"> {}

export default (sequelize: Sequelize, DataTypes: DataType) => {
  class Customer extends Model<CustomerAttributes,CustomerCreationAttributes> 
  implements CustomerAttributes{

    public id!: number;
    public name!: string;
    public lastName!: string;
    public email!: string;
    public address!: string;

    static associate(models: any) {
      Customer.hasMany(models.Order,{
        foreignKey:{
          name: 'customerId',
          allowNull: false
        }
      })
    }
  };
  Customer.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    address: {
      type: DataTypes.STRING(250),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Customer',
    tableName: 'customers'
  });
  return Customer;
};