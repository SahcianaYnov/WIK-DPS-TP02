import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/ping', (req, res) => {
    const headers = req.headers;
    console.log('Request headers:', headers);
    res.json({headers});
});

app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>');
});

app.use((req, res) => {
    res.status(404).end();
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});