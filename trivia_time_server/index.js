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

io.on('connection', (socket) => {
    if(clientCount < 3) {
        console.log("New client connected", clientCount);
        clientCount++;
    }
    else {
        if (interval) {
            clearInterval(interval);
        }
        var counter = 10;
            var WinnerCountdown = setInterval(function(){
            console.log(counter) 
            socket.emit('counter', counter);
            counter--
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
    }
});

// let countDown = 10;
// const getApiAndEmit = socket => {
//     while(countDown > 0) {
//         console.log(countDown)
//         countDown--;
    
//         const response = countDown;
//         socket.emit("FromAPI", response);
//     }
//     if (countDown === 0) {
//         console.log("Time up"
//     }
// }

server.listen(port, () => console.log(`Listening on port ${port}`));
