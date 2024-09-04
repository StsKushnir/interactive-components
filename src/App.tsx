import "./App.css";
import { FirstPants } from "./components/FirstPants/FirstPants";
import { FirstJacket } from "./components/FirstJacket/FirstJacket";
import { SecondPants } from "./components/SecondPants/SecondPants";
import { Sleeveless } from "./components/Sleeveless/Sleeveless";
import { Sweater } from "./components/Sweater/Sweater";
import { SecondJacket } from "./components/SecondJacket/SecondJacket";
import { ShortMan } from "./components/ShortMan/ShortMan";
import { ShortWoman } from "./components/ShortWoman/ShortWoman";
import { ShortUniversal } from "./components/ShortUniversal/ShortUniversal";

function App() {
  return (
    <>
      <FirstPants />
      <SecondPants />
      <Sleeveless />
      <Sweater />
      <FirstJacket />
      <SecondJacket />
      <ShortMan />
      <ShortWoman />
      <ShortUniversal />
    </>
  );
}

export default App;
