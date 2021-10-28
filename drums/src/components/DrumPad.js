import React from "react";

import Button from "@mui/material/Button";


const DrumPad = (props) => {

    

    const handleKeyDown = (event) => {
        event.preventDefault();
        if (event.keyCode === props.keyCode) handleClick();
    }

    function handleClick() {
        const audio = new Audio(props.soundUrl);
        audio.play();
    }

    document.addEventListener('keydown', handleKeyDown);

    return (
        <Button id={props.id} className="drum-pad" variant="contained" onClick={handleClick}>{props.keyLetter}
            <audio id={props.keyLetter} className="clip" src={props.soundUrl}></audio>
        </Button>
    );
} 

export default DrumPad;