import React from "react";

import Button from "@mui/material/Button";

const DrumPad = (props) => {
    return (
        <Button variant="contained">{props.keyboard}</Button>
    );
} 

export default DrumPad;