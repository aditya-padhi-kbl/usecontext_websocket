import { useEffect, useRef } from "react";

const WebSocketComponent = () => {
  const ws = useRef();
  useEffect(() => {
    ws.current = new WebSocket("wss://echo.websocket.org/");
    ws.current.onopen = () => console.log("Websocket is open");
    ws.current.onclose = () => console.log("Websocket is closed");
    ws.current.onmessage = (e) => {
      console.log(e);
      alert(e.data);
    };
    return () => {
      console.log("Executing connection close callback");
      ws.current.close();
    };
  }, []);

  function sendMessage() {
    if (!ws.current) {
      console.log("Connection is not ready");
      return;
    }

    ws.current.send("Hello World");
  }
  return <button onClick={sendMessage}>Send Messsage</button>;
};

export default WebSocketComponent;
