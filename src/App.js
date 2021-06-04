import { useMediaQuery } from "@chakra-ui/react";
import Ectomorphy from "./components/Ectomorphy/index";
import Endomorphy from "./components/Endomorphy/index";
import Mesomorphy from "./components/Mesomorphy/index";
import './App.css';

function App() {

  const [breakpoint] = useMediaQuery("(max-width: 1000px)")

  return (
    <div className="container">
      <h1 className="heading"><span style={{color: 'teal'}}>Somatotype</span> Analysis</h1>
      <div className="equations-container" style={{flexDirection: breakpoint ? 'column' : 'row'}}>
        <Ectomorphy />
        <Endomorphy />
        <Mesomorphy />
      </div>
    </div>
  )
}

export default App;
