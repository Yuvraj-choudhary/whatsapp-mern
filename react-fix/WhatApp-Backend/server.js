import express from 'express';
import mongoose from 'mongoose';
import Messages from './dbMessages.js';
import Pusher from 'pusher';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 9000;

const pusher = new Pusher({
    appId: "1294262",
    key: "35e20264baf46329d504",
    secret: "2eeb6103d9c4d15e9940",
    cluster: "ap2",
    useTLS: true,
});

app.use(express.json())

app.use(cors());

const connection_url =
    "mongodb+srv://admin:10@Birampur@cluster0.kkqxx.mongodb.net/whatappdb?retryWrites=true&w=majority";
    
mongoose.connect(connection_url,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log("yes this is working...");

    const msgCollection = db.collection('messagecontents')
    const changeStream = msgCollection.watch();

    changeStream.on("change", (change) => {
        console.log("A Change Occured", change)
        
        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('messages', 'inserted',
            
                {
                    name: messageDetails.name,
                    message:messageDetails.message,
                    timestamp:messageDetails.timestamp,
                    received: messageDetails.received
                });
            
        }
        else
        {
            console.log("Sorry a error occured")
        }
    });
});

app.get("/", (req, res) => res.status(200).send("hello world"));

app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(200).send(data)
        }
    })
})

app.post("/messages/new", (req, res) => {
    const dbMessage = req.body

    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})

app.listen(port, () => console.log(`Listening on Localhost:${port}`));