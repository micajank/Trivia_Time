import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:4001';




function ClientSocket(props) {

  const [response, setResponse] = useState("");
  let rounds = 
  useEffect(() => {
    let mounted = true;
    const socket = socketIOClient(ENDPOINT);

    socket.on("preQuestion", data => {
        console.log("Waiting for question");
        if (mounted) {
            setResponse(data);
        }
        socket.on("counter", data => {
            console.log("This is data: " + data)
            if (mounted) {
            setResponse(data);
            }
        })
    })
    // return () => mounted = false;
   
    

    return () => mounted = false;
  }, []);
 

  return (
    <Router>
      <p>{response}</p>
          
    </Router>
  );
}

export default ClientSocket;