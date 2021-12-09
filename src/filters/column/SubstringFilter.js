import React from 'react';
import { TextField } from '@mui/material';

export function SubstringFilter({ column: { filterValue, setFilter } }) {
    return (
        <TextField
            value={filterValue}
            onChange={(e) => setFilter(e.target.value)}
            id="standard-basic"
            label="Search"
            variant="standard" />
    )
}