import { Container } from '@mui/material';
import DrumPad from './components/DrumPad';
import ProjectBar from './components/ProjectBar';

import logo from './logo.svg';
import './styles/main.css';

const App = () => {
  const keyboardArray = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
  
  return (
    <div className="App">
      <ProjectBar></ProjectBar>
      <Container id="drum-machine">
        <div id="display"></div>

        {keyboardArray.map(keyOnBoard => (
          <DrumPad key={keyOnBoard} keyboard={keyOnBoard}></DrumPad>
          ))}

{/**        <DrumPad key="Q" keyboard="Q"></DrumPad>  // Old Code. Only left for testing things
        <DrumPad key="W" keyboard="W"></DrumPad>
        <DrumPad key="E" keyboard="E"></DrumPad>
        */}
      </Container>
    </div>
  );
}

export default App;
