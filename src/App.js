import React, { Component } from 'react';
import './App.css';

var mqtt = require('mqtt')
var client = mqtt.connect('ws://localhost:8883', {
  clientId: `device_${new Date().getTime()}`,
  username: "JWT",
  password: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJ1c2VyX2lkIjoiMTIzNCJ9.rmiYkzIJlj0RYB76md3YocCxEmGQx_UTLUGAQDUkrfI"
})

client.on('connect', function () {
  console.log("Connected.")
  client.subscribe('1234/pong')
})

client.on('message', function (topic, message) {
  console.log(message.toString())
})

class App extends Component {
  render() {
    const ping = () => {
      client.publish('1234/ping', 'Hello mqtt');
    };
    return (
      <div className="App">
        <button onClick={ping}>Ping</button>
      </div>
    );
  }
}

export default App;
