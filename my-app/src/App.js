import "./App.css";
// import YoutubeList from "../src/components/youtube/YoutubeList";
// import Toggle from "./components/toggle/Toggle";
// import Counter from "./components/counter/Counter";
// import Game from "./components/tictactoe/Game";
// import Button from "./components/button/Button";
import Card from "./components/card/Card";
import CardList from "./components/card/CardList";

function App() {
  return (
    <div>
      {/* <YoutubeList></YoutubeList> */}
      {/* <Toggle></Toggle>
    <Counter></Counter> */}
      {/* <Game></Game> */}
      {/* <Button>Primary</Button>
   <Button >SecondDary</Button> */}
   <CardList>
   <Card secondary={true}></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   <Card></Card>
   </CardList>
     
    </div>
  );
}
export default App;
