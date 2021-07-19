import { useContext } from "react";
import RateContext from "./RateContext";

function RateComponent() {
  const { value, increment } = useContext(RateContext);
  const range = [...new Array(5).keys()];

  function clickStar(event) {
    increment(event.target.dataset.item);
  }
  return (
    <section onClick={clickStar}>
      {range.map((param) => (
        <span
          className={param <= value ? "rated" : "unrated"}
          key={param}
          data-item={param}
        />
      ))}
    </section>
  );
}

export default RateComponent;
