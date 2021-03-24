import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import sfj from './sfj';

const port = 8000;

const server = express();
server.use(cors());
server.use(express.urlencoded({extended: true}))
server.use(express.json());

server.use('/sfj', sfj);

server.get('/', async (req, res) => {
    res.send('bruv').status(200);
})


server.listen(port, () => {
    console.log('Backend For Projects on port', port);
});

