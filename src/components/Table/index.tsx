import { useState } from 'react';
import { Column, useTable, useRowSelect } from 'react-table';

import { CheckBox } from '@/components/CheckBox';

import { TableHeading } from './components/TableHeading';
import styles from './styles.module.scss';

type TCanvas = {
  title: string;
  content: string;
};

export const Table = () => {
  const data = [
    {
      title: 'Hello',
      content: 'World',
    },
    {
      title: 'react-table',
      content: 'rocks',
    },
    {
      title: 'whatever',
      content: 'you want',
    },
  ];

  const columns: Column<TCanvas>[] = [
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Content',
      accessor: 'content',
    },
  ];

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  // const columns = [
  //   columnHelper.accessor((row) => row.title, {
  //     id: 'select',
  //     header: (info) => (
  //       <CheckBox
  //         name={info.header.id}
  //         checked={table.getIsAllRowsSelected()}
  //         handleCheck={table.getToggleAllRowsSelectedHandler()}
  //       />
  //     ),
  //     cell: (info) => (
  //       <CheckBox
  //         name={info.getValue()}
  //         checked={info.row.getIsSelected()}
  //         handleCheck={info.row.getToggleSelectedHandler()}
  //       />
  //     ),
  //   }),
  //   columnHelper.accessor((row) => row.title, {
  //     id: 'title',
  //     cell: (info) => info.getValue(),
  //   }),
  //   columnHelper.accessor((row) => row.content, {
  //     id: 'content',
  //     cell: (info) => info.getValue(),
  //   }),
  // ];

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
