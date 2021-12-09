import React, { useState, useEffect } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

export function CheckboxFilter({ column: { filterValue, setFilter } }) {
    const [on, setOn] = useState(false);

    useEffect(() => {
        setFilter(on);
        console.log(on);
    }, [on]);
    
    return (
        <FormControlLabel
            control={
                <Checkbox
                    value={on}
                    onChange={(e) => {
                        setOn(!on);
                    }}
                />
            }
            label="Members Only"
        />
    )
}