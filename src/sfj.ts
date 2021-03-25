import express from 'express';
import { MongoClient } from 'mongodb';


class ProjectModel {
    public type: string;
    public title: string;
    public description: string;
    public imageUrl: string;
    public date: Date;
    constructor(args: {title: string, description: string, imageUrl: string}) {
        this.type = 'project';
        this.title = args.title;
        this.description = args.description;
        this.imageUrl = args.imageUrl;
        this.date = new Date(Date.now());
    }
}


const mongoURI = <string> process.env.MONGODB;
const mongo = new MongoClient(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const router = express.Router();

(async () => {
    await mongo.connect();
    console.log('Connected to MongoDB Cloud');
})()


router.post('/newproject', async (req, res) => {
    try {
        const project = new ProjectModel({
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl
        });
    } catch {
        res.json({error: true}).status(500);
    }
});




export default router;
