import { ColumnDef, createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import cl from 'classnames';
import { useState } from 'react';

import { CheckBox } from '@/components/CheckBox';

import { TableHeading } from './components/TableHeading';
import styles from './styles.module.scss';

type TCanvas = {
  title: string;
  content: string;
};

export const Table = () => {
  const [rowSelection, setRowSelection] = useState({});

  const columnHelper = createColumnHelper<TCanvas>();

  const defaultData: TCanvas[] = [
    {
      title: 'tanner',
      content: 'linsley',
    },
    {
      title: 'miller',
      content: 'Baccks',
    },
  ];

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

  const columns: ColumnDef<TCanvas>[] = [
    {
      id: 'select',
      header: (info) => (
        <CheckBox
          name={info.header.id}
          checked={table.getIsAllRowsSelected()}
          handleCheck={table.getToggleAllRowsSelectedHandler()}
        />
      ),
      cell: ({ row }) => (
        <CheckBox name={row.id} checked={row.getIsSelected()} handleCheck={row.getToggleSelectedHandler()} />
      ),
    },
    {
      accessorKey: 'title',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'content',
      cell: (info) => info.getValue(),
    },
  ];

  const [data, setData] = useState(() => [...defaultData]);

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(rowSelection);
  return (
    // <div className={styles.table}>
    //   <TableHeading />
    // </div>
    <table className={styles.table}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id} className={styles.tableRow}>
            {headerGroup.headers.map((header) => (
              <th
                className={cl(styles.tableCell, { [styles.tableCell_select]: header.id === 'select' })}
                key={header.id}>
                {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className={cl(styles.tableRow, styles.tableRow_body)}>
            {row.getVisibleCells().map((cell) => (
              <td className={styles.tableCell} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
