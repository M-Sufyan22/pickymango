import React from "react";
import { useLanguage } from "../../hooks/useLanguage";

const Counter = ({ time, timeLog = 0 }) => {
  const { language } = useLanguage();
  const component = language.data.home.slider;
  return (
    <div className="counter-item">
      <span className="counter--value">
        <div className="count-down" style={{ display: "inline" }}>
          <div className="hand hand-m">
            <span className="digital digital-1 ">{timeLog}</span>
          </div>
        </div>
      </span>
      <strong className="counter--label"> {component[time]}</strong>
    </div>
  );
};

export default Counter;
