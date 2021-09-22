import { Request, Response } from "express";
import { Transaction } from "sequelize/types";
import db from "../database/models";
import invokeFunction from "../helpers/lambda";

export const save = async (req: Request, res: Response) => {
  try {
    const { customer, order_details } = req.body;

    await db.sequelize.transaction(async (t: Transaction) => {
      return db.Customer.create(customer, { transaction: t }).then(
        async (customer) => {
          const { id } = customer;

          db.Order.create(
            {
              customerId: id,
              details: order_details,
            },
            {
              include: {
                model: db.OrdersDetails,
                as: "details",
              },
            }
          );
        }
      );
    });

    const data = {
      customer,
      order_details
    }

    //AQUI INVOCAREMOS LA FUNCION
    invokeFunction(data)
      .then(console.log)
      .catch(console.log)
      
    return res.status(200).json({ status: true });
  } catch (error) {
    return res.status(500).json({ status: false });
  }
};
