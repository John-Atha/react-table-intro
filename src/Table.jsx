import React, { useState, useMemo } from 'react';
import { useTable, useFilters, useGlobalFilter } from 'react-table';
import { CheckboxFilter } from './filters/column/CheckboxFilter';
import { SubstringFilter } from './filters/column/SubstringFilter';
import { FormControlLabel, Checkbox } from '@mui/material';
import GlobalFilter from './filters/global/GlobalFilter';

//import { matchSorter } from 'match-sorter';

const Table = () => {

    const [useColumnFilters, setUseColumnFilters] = useState(true);
    const [useGlobalFilters, setUseGlobalFilters] = useState(true);

    const data = useMemo(
        () => [
            {
                fname: "John",
                lname: "Atha",
                member: true,
            },
            {
                fname: "George",
                lname: "Athana",
                member: true,
            },
            {
                fname: "Thal",
                lname: "Athana",
                member: false,
            },
            {
                fname: "Dor",
                lname: "Spil",
                member: false,
            },
            {
                fname: "Thal",
                lname: "Spil",
                member: true,
            },
        ],
        []
    );
    
    const columns = useMemo(
        () => [
            {
                Header: 'First name',
                accessor: 'fname',
                Filter: useColumnFilters ? SubstringFilter : null,
            },
            {
                Header: 'Last name',
                accessor: 'lname',
                Filter: useColumnFilters ? SubstringFilter : null,
            },
            {
                Header: 'Member',
                accessor: 'member',
                Cell: ({value}) => (value ? "Yes" : "No"),
                Filter: useColumnFilters ? CheckboxFilter : null,
                filterMethod: 'equals',
            }
        ],
        [useColumnFilters]
    );

    const tableInstance = useTable({ columns, data }, useGlobalFilter, useFilters);
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = tableInstance;

    const { globalFilter } = state;

    return (
        <div>
            <h2>test</h2>
            <FormControlLabel
                control={
                    <Checkbox
                        defaultChecked
                        value={useColumnFilters}
                        onChange={(e) => {
                            setUseColumnFilters(!useColumnFilters);
                        }}
                    />
                }
                label="Use column filters"
            />
            <FormControlLabel
                control={
                    <Checkbox
                        defaultChecked
                        value={useGlobalFilters}
                        onChange={(e) => {
                            setUseGlobalFilters(!useGlobalFilters);
                        }}
                    />
                }
                label="Use global filters"
            />
            <br />
            {useGlobalFilters &&
                <GlobalFilter
                    filter={globalFilter}
                    setFilter={setGlobalFilter}
                />            
            }
            <table {...getTableProps()}  >
                <thead>
                    {/* display the headers and their column filters*/}
                    {headerGroups.map(headerGroup => {
                        return(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => {
                                    return(
                                        <th {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                            <div>
                                                {column.Filter &&
                                                    column.render('Filter')
                                                }
                                            </div>
                                        </th>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {/* display the rows */}
                    {rows.map(row => {
                        prepareRow(row);
                        return(
                            <tr className={row.index%2===0 ? 'even-row' : 'odd-row'} {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return(
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}

                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )   
}

export default Table;

