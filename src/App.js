import "./styles.css";
import { calculateFlavanoidsMean, calculateGammaMean } from "./calculate/Mean";
import {
  calculateFlavanoidsMedian,
  calculateGammaMedian
} from "./calculate/Median";
import { calculateFlavanoidsMode, calculateGammaMode } from "./calculate/Mode";
import { alcoholCount } from "./calculate/AlcoholDetails";
import Flavanoids from "./components/Flavanoids";
import Gamma from "./components/Gamma";

const App = () => {
  const flavanoidsMean = calculateFlavanoidsMean;
  const flavanoidsMedian = calculateFlavanoidsMedian;
  const flavanoidsMode = calculateFlavanoidsMode;
  const gammaMean = calculateGammaMean;
  const gammaMedian = calculateGammaMedian;
  const gammaMode = calculateGammaMode;

  return (
    <div className="App">
      <Flavanoids
        alcoholCount={alcoholCount}
        flavanoidsMean={flavanoidsMean}
        flavanoidsMedian={flavanoidsMedian}
        flavanoidsMode={flavanoidsMode}
      />
      <br />
      <Gamma
        alcoholCount={alcoholCount}
        gammaMean={gammaMean}
        gammaMedian={gammaMedian}
        gammaMode={gammaMode}
      />
    </div>
  );
};

export default App;
