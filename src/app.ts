import Server from './server/config';
import dotenv from 'dotenv';
dotenv.config();

const server = new Server();
server.listen();