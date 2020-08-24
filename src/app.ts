import express from 'express';
import path from 'path';

import config from './config';

const app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(config.port, () => console.log (`Listening at http://localhost:${config.port}`));