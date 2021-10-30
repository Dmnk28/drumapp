import React from "react";

import Button from "@mui/material/Button";


const DrumPad = (props) => {

    const handleKeyDown = (keyCode, e) => {
        e.preventDefault();
        if (e.keyCode === keyCode) handleClick();
    }

    function handleClick() {
        playaudio();
        props.setDisplay(props.id);
    }

    function playaudio() {
        const audio = document.getElementById(props.keyLetter);
        audio.currentTime = 0;
        audio.play();
    }

    document.addEventListener('keydown', handleKeyDown.bind(this, props.keyCode));

    return (
        <Button id={props.id} className="drum-pad" variant="contained" onClick={handleClick}>{props.keyLetter}
            <audio id={props.keyLetter} className="clip" src={props.soundUrl}></audio>
        </Button>
    );
} 

export default DrumPad;