import { useState } from "react";
// import RateComponent from "./RateComponent";
import RateContext from "./RateContext";
import WebSocketComponent from "./WebSocketComponent";
export default function App() {
  const [value, setValue] = useState(2);
  function increment(param) {
    setValue(param);
  }
  return (
    <RateContext.Provider value={{ value, increment }}>
      {/* <RateComponent />
      <RateComponent /> */}
      <WebSocketComponent />
    </RateContext.Provider>
  );
}
