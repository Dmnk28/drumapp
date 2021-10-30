import React, {useState} from 'react';

import { Container } from '@mui/material';
import DrumPad from './components/DrumPad';
import ProjectBar from './components/ProjectBar';
import drumsArray from './data/_drumsArray';

import logo from './logo.svg';
import './styles/main.css';

const App = () => {
  const [display, setDisplay] = useState('');

  return (
    <div className="App">
      {/**<ProjectBar></ProjectBar>
       */}
      <Container id="drum-machine">
        <div id="display">{display}</div>

        {drumsArray.map(el => (
          <DrumPad key={el.id} id={el.id} keyLetter={el.keyLetter} keyCode={el.keyCode} soundUrl={el.soundUrl} setDisplay={setDisplay}></DrumPad>
        ))}
      </Container>
    </div>
  );
}

export default App;
