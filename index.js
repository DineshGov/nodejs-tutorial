const express = require('express');
var bodyParser = require("body-parser");
const app = express();
const v1 = express.Router();

const MessageService = require('./services/message');
const messageService = new MessageService();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', v1);

v1.get('/message', (request, response) => {
    response.send(
        messageService.getMessages()
    );
});

v1.get('/message/:id', (request, response) => {
    const id = parseInt(request.params.id, 10);
    response.send(
        messageService.getMessage(id)
    );
});

v1.post('/message', (request, response) => {
    const message = request.body;
    try {
        response.send(messageService.createMessage(message));
    } catch (error) {
        response.sendStatus(400).end(error);
    }
});

app.listen(3000, () => {
    console.log('Server listening on port 3000!');
});
