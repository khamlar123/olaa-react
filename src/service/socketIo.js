import React, { Component } from "react";
import io from "socket.io-client";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
    };

    this.socket = io("http://localhost:3001");
    let sn = 'vh001';
    this.socket.on(sn, (data) => {
      this.setState((prevState) => ({
        messages: [...prevState.messages, data],
      }));

      console.log('xxxxxx', data);

    });

  }

  componentWillUnmount() {
    this.socket.disconnect();
  }

  handleSendMessage = (message) => {
    this.socket.emit("vh001", message);
  };

  render() {
    return (
     <div>
        <h1>tests</h1>
        <ul>
          {this.state.messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Enter a message"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              this.handleSendMessage(event.target.value);
              event.target.value = "";
            }
          }}
        />
      </div>
    );
  }
}

export default App;