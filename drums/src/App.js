import { Container } from '@mui/material';
import DrumPad from './components/DrumPad';
import ProjectBar from './components/ProjectBar';
import drumsArray from './data/_drumsArray';

import logo from './logo.svg';
import './styles/main.css';

const App = () => {
  
  return (
    <div className="App">
      <ProjectBar></ProjectBar>
      <Container id="drum-machine">
        <div id="display"></div>

        {drumsArray.map(el => (
          <DrumPad id={el.id} keyLetter={el.keyLetter} keyCode={el.keyCode} soundUrl={el.soundUrl}></DrumPad>
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
