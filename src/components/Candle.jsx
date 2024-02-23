import { useState, useEffect } from "react";

const Candle = () => {
  const INITIAL_CANDLE_SIZE = 80;
  const [candleSize, setCandleSize] = useState(INITIAL_CANDLE_SIZE);

  function makeCandleSmaller() {
    setCandleSize((prev) => prev - 1);
  }

  function resetCandle() {
    setCandleSize(INITIAL_CANDLE_SIZE);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCandleSize((prev) => prev - 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="block">
      <div>
        {candleSize <= 10 ? (
          <button onClick={resetCandle}>Replace with new candle </button>
        ) : (
          <button onClick={makeCandleSmaller}>Make candle smaller</button>
        )}
      </div>
      <div className="block candleContainer">
        {candleSize > 10 && (
          <div style={{ height: `${candleSize}%` }} className="candle">
            <div className="flame">
              <div className="shadows" />
              <div className="top" />
              <div className="middle" />
              <div className="bottom" />
            </div>
            <div className="wick" />
            <div className="wax" />
          </div>
        )}
      </div>
    </div>
  );
};
export default Candle;
