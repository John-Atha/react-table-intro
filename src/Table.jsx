import React, { useMemo } from 'react';
import { useTable } from 'react-table';


const Table = () => {

    const data = useMemo(
        () => [
            {
                col1: "Hello",
                col2: "World",
            },
            {
                col1: 'react-table',
                col2: 'rocks',
            },
            {
                col1: 'whatever',
                col2: 'you want',
            },
            {
                col1: 'test',
                col2: 'one',
            },
            {
                col1: 'test',
                col2: 'two',
            },
            {
                col1: 'test',
                col2: 'three',
            },
        ],
        []
    );
    
    const columns = useMemo(
        () => [
            {
                Header: 'Column1',
                accessor: 'col1',
            },
            {
                Header: 'Column2',
                accessor: 'col2',
            },
        ],
        []
    );
    
    const tableInstance = useTable({ columns, data });
    
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
                </thead>
                <tbody {...getTableBodyProps()}>
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

