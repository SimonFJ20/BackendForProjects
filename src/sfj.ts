import express from 'express';
import { MongoClient } from 'mongodb';

const mongoURI = <string> process.env.MONGODB;
const mongo = new MongoClient(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const mongoRun = async () => {
    try {
        await mongo.connect();
        console.log('Connected to MongoDB Cloud');
    } catch {
        console.log('Could not connect to MongoDB Cloud');
    }
}
mongoRun();

const router = express.Router();



export default router;
