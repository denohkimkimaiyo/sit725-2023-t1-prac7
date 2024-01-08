const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const formController = require('./controllers/formController.js');
const projectsRouter = require('./routes/projects.js');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('views'));


app.post("/submit-form", formController.submitForm);
app.use('/api/projects', projectsRouter);

io.on('connection', (socket) => {
    console.log('A user is connected');

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });

    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 5000);
});

const port = process.env.PORT || 2021;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});