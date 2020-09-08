var express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const port = process.env.PORT || 4001;
const app = require('./routes/app');

const index = express();
index.use(app);

const server = http.createServer(index);

const io = socketIo(server);

let interval;
let clientCount = 0;
let startGame = false;

io.on('connection', (socket) => {
    if(clientCount < 2) {
        console.log("New client connected", clientCount);
        clientCount++;
    }
    else if(clientCount === 2) {
        startGame = true;
        if (interval) {
            clearInterval(interval);
        }
        if (startGame) {
            socket.emit('preQuestion', "Get ready for the next question.");
            console.log("prequestion")
            var preQuestion = setTimeout(function() {
                var counter = 10;
                var WinnerCountdown = setInterval(function(){
                console.log(counter) 
                socket.emit('counter', counter);
                counter--;
                if (counter === 0) {
                socket.emit('counter', "Time is up!!");
                console.log("Time's up!!!")
                clearInterval(WinnerCountdown);
                }
                    
                }, 1000);
    
                socket.on('disconnect', () => {
                    console.log("Client disconnected");
                    clearInterval(interval);
                });
            }, 10000);
            

        }
    }
});


server.listen(port, () => console.log(`Listening on port ${port}`));
