import "./App.css";
// import YoutubeList from "../src/components/youtube/YoutubeList";
// import Toggle from "./components/toggle/Toggle";
// import Counter from "./components/counter/Counter";
import Game from "./components/tictactoe/Game";
// import Button from "./components/button/Button";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";
import Photos from "./components/photo/Photos";
import HackerNews from "./components/news/HackerNews";
import React, { useEffect, useRef, useState } from "react";

function App() {
  const timerRef = useRef(null);
  const [count, setCount] = useState(0);
  const handldStart = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((counter) => counter + 1);
    }, 1000);
  };

  const handldEnd = () => {
    clearInterval(timerRef.current);
    timerRef.current= null;
  };

  useEffect(() => {
    return() => clearInterval(timerRef.current);
  },[]);
  return (
    <div>
      <h3>Timer: {count}s</h3>
      <button onClick={handldStart}>Start</button>
      <button onClick={handldEnd}>Stop</button>

      {/* <Photos></Photos> */}
      {/* <HackerNews></HackerNews> */}
    </div>
  );
}
export default App;
