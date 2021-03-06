import React from 'react';
import { TextField } from '@mui/material';

export function SubstringFilter({ column: { filter, setFilter } }) {

    return (
        <TextField
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            id="standard-basic"
            label="Search"
            variant="standard" />
    )
}