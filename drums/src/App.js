import { Container } from '@mui/material';
import DrumPad from './components/DrumPad';
import ProjectBar from './components/ProjectBar';

import logo from './logo.svg';
import './styles/main.css';

const App = () => {
  return (
    <div className="App">
      <ProjectBar></ProjectBar>
      <Container id="drum-machine">
        <div id="display"></div>
        <DrumPad key="Q" keyboard="Q"></DrumPad>
        <DrumPad key="W" keyboard="W"></DrumPad>
        <DrumPad key="E" keyboard="E"></DrumPad>
        <DrumPad key="A" keyboard="A"></DrumPad>
        <DrumPad key="S" keyboard="S"></DrumPad>
        <DrumPad key="D" keyboard="D"></DrumPad>
        <DrumPad key="Z" keyboard="Z"></DrumPad>
        <DrumPad key="X" keyboard="X"></DrumPad>
        <DrumPad key="C" keyboard="C"></DrumPad>
      </Container>
    </div>
  );
}

export default App;
