import React, {useState} from 'react';

import { Grid, Typography } from '@mui/material';
import DrumPad from './components/DrumPad';
import ProjectBar from './components/ProjectBar/ProjectBar';
import drumsArray from './data/_drumsArray';

import { ThemeProvider } from '@mui/material';
import './styles/main.css';
import theme from './components/Theme';

const App = () => {
  const [display, setDisplay] = useState('');

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <ProjectBar 
          title       =   'Build a Drum Machine'
          institute    =   'FreeCodeCamp'
          instURL     =   'https://www.freecodecamp.org/'
          course      =   'Front End Development Libraries Certification'
          courseURL   =   'https://www.freecodecamp.org/learn/front-end-development-libraries/'
          userStory   =   'https://www.freecodecamp.org/learn/front-end-development-libraries/front-end-development-libraries-projects/build-a-drum-machine'
          repository  =   'https://github.com/Dmnk28/drumapp'
          readme      =   'https://github.com/Dmnk28/drumapp/blob/main/README.md'
      />
      <Grid container spacing={{xs:3}} id="drum-machine">
        <Grid item>
          <Typography variant="h2">Drum Machine</Typography>
          <Typography variant="h5">A FreeCodeCamp Project</Typography>
          <div id="display">
            <h2>{display}</h2>
          </div>
        </Grid>
        <Grid item>
          <Grid container spacing={{xs:1}} colums={{xs:2}}>
            {drumsArray.map(el => (
              <Grid item xs={4} md={4}>
                <DrumPad key={el.id} id={el.id} keyLetter={el.keyLetter} keyCode={el.keyCode} soundUrl={el.soundUrl} setDisplay={setDisplay}></DrumPad>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
