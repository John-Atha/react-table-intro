import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useFilters } from 'react-table';
import { CheckboxFilter } from './filters/column/CheckboxFilter';
import { SubstringFilter } from './filters/column/SubstringFilter';
//import { matchSorter } from 'match-sorter';

const Table = () => {

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
                Filter: SubstringFilter,
                filterMethod: 'includes'

            },
            {
                Header: 'Last name',
                accessor: 'lname',
                Filter: SubstringFilter,
                filterMethod: 'includes'
            },
            {
                Header: 'Member',
                accessor: 'member',
                Cell: ({value}) => (value ? "Yes" : "No"),
                Filter: CheckboxFilter,
                filterMethod: 'equals',
            }
        ],
        []
    );

    const tableInstance = useTable({ columns, data }, useFilters);
    
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance;

    return (
        <div>
            <h2>test</h2>
            <table {...getTableProps()}  >
                <thead>
                    {/* display the headers */}
                    {headerGroups.map(headerGroup => {
                        return(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => {
                                    return(
                                        <th {...column.getHeaderProps()}>
                                            {column.render('Header')}
                                        </th>
                                    )
                                })}
                            </tr>
                        )
                    })}
                    {/* display their column filters */}
                    {headerGroups.map(headerGroup => {
                        return(
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => {
                                    return(
                                        <th {...column.getHeaderProps()}>
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

