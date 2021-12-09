import React, { useState, useEffect } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

export function CheckboxFilter({ column: { filter, setFilter } }) {
     
    return (
        <FormControlLabel
            control={
                <Checkbox
                    value={filter}
                    onChange={(e) => {
                        setFilter(e.target.checked);
                    }}
                />
            }
            label="Members Only"
        />
    )
}