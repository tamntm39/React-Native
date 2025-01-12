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
import Input from "./components/youtube/Input";
import Dropdown from "./components/youtube/Dropdown";
import Blog from "./components/youtube/Blog";
import { use } from "react";
import useClickOutSide from "./components/hooks/useClickOutSide";
import SidebarMenu from "./components/youtube/SideBarMenu";
import MovieSearchApp from "./components/youtube/MovieSearchApp";

function App() {
  const { show, setShow, nodeRef } = useClickOutSide("span");
  return (
    <div>
      {/* <span
        onClick={() => setShow(true)}
        className="inline-block m-3 p-3 rounded-lg text-white bg-green-400 cursor-pointer"
      >
        Show menu
      </span>
      <SidebarMenu show={show} ref={nodeRef} ></SidebarMenu>
      <Dropdown></Dropdown> */}
      <MovieSearchApp></MovieSearchApp>
    </div>
  );
}
export default App;
