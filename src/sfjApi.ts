import { Router } from "express";
import { MongoClient } from 'mongodb';

const connectToMongodb = async () => {
    try {
        const mongoURI = <string>process.env.MONGODB;
        const client = new MongoClient(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true});
        await client.connect();
        const database = client.db('MessAngerV2');
        console.log('Connected to MongoDB Cloud');
        return database;
    } catch(error) {
        console.error('Error connecting to MongoDB', error);
    }
}

export const sfjApi = async () => {
    const router = Router();

    const database = await connectToMongodb();




    return router;
}
