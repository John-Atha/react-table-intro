import React from 'react';
import { TextField } from '@mui/material';
import '../../App.css'

function GlobalFilter({ filter, setFilter }) {

    return (
        <TextField
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            id="standard-basic"
            label="Global Filter"
            variant="standard"
            margin='normal'
        />
    );
}

export default GlobalFilter;