import express, { Application } from 'express';
import cors from 'cors';
import orderRouter from '../routes/order.routes';

class Server {

    private app: Application;
    private port: string;

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8080'; 

        this.middlewares();

        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api/v1/order',orderRouter);
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log('Ejecutando en: ',this.port);
        });
    }
}

export default Server;