import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://127.0.0.1:4001';




function ClientSocket() {

  const [response, setResponse] = useState("");

  useEffect(() => {
      let mounted = true;
    const socket = socketIOClient(ENDPOINT);
    socket.on("counter", data => {
        console.log("This is data: " + data)
        if (mounted) {
           setResponse(data);
        }
    })
    return () => mounted = false;
  }, []);
 

  return (
    <Router>
      <p>{response}</p>
          
    </Router>
  );
}

export default ClientSocket;