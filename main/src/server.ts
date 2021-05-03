import { config } from "dotenv";
import express, { json, Router, urlencoded } from "express";
import { createServer } from 'http';
import cors from 'cors';
import { join } from 'path';

// redirect to simonfromjakobsen.netlify.app
const netlifyRedirect = (router: Router) => {
    router.get('/', async (req, res) => {
        res.status(200).send(/*html*/`<html><head><meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Redirecting</title></head><body>Redirecting
        <script>window.location.href='https://simonfromjakobsen.netlify.app/';
        setTimeout(()=>{window.location.href='https://simonfromjakobsen.netlify.app/';},500);
        </script></body></html>`); 
     });
     return router
}

const server = async () => {
    config();

    const port = parseInt(<string>process.env.HTTP_PORT);

    const app = express();
    const server = createServer(app);

    app.use(cors());
    app.use(json());
    app.use(urlencoded({extended: true}));

    netlifyRedirect(app);
    app.use(express.static(join(__dirname, '../public')));

    server.listen(port, () => {
        console.log('BFP/main on port', port);
    });
}

server().catch(error => console.error('BFP/main failed to start', error));
