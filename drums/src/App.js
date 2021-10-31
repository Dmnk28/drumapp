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
    <ThemeProvider theme={theme} className="App">
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
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">Drum Machine</Typography>
          <Typography variant="h5"component="h2">A FreeCodeCamp Project</Typography>
        </Grid>
        <Grid item xs={6} md={6}>
          <div id="display">
            <Typography variant="h5" component="h3">{display}</Typography>
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Grid container spacing={{xs:1}} colums={{xs:2}}>
            {drumsArray.map(el => (
              <Grid item xs={4} md={4}>
                <DrumPad 
                    key={el.id} 
                    id={el.id} 
                    keyLetter={el.keyLetter} 
                    keyCode={el.keyCode} 
                    soundUrl={el.soundUrl} 
                    setDisplay={setDisplay} 
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
