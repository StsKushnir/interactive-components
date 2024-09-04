import "./App.css";
import { FirstPants } from "./components/FirstPants/FirstPants";
import { FirstJacket } from "./components/FirstJacket/FirstJacket";
import { SecondPants } from "./components/SecondPants/SecondPants";
import { Sleeveless } from "./components/Sleeveless/Sleeveless";
import { Sweater } from "./components/Sweater/Sweater";
import { SecondJacket } from "./components/SecondJacket/SecondJacket";

function App() {
  return (
    <>
      <FirstPants />
      <SecondPants />
      <Sleeveless />
      <Sweater />
      <FirstJacket />
      <SecondJacket />
    </>
  );
}

export default App;
