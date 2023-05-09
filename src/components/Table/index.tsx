import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import cl from 'classnames';
import { useState } from 'react';

import { TableHeading } from './components/TableHeading';
import { TableSelection } from './components/TableSelection';
import styles from './styles.module.scss';

type Props<T> = {
  data: T[];
  columns: ColumnDef<T>[];
};

export const Table = <T,>({ data, columns }: Props<T>) => {
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
    },
    columnResizeMode: 'onChange',
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.wrapper}>
      <TableSelection
        numSelected={Object.keys(rowSelection).length}
        numTotal={table.getPreFilteredRowModel().rows.length}
      />
      <table className={styles.table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className={styles.tableRow}>
              {headerGroup.headers.map((header) => (
                <th style={{ width: header.getSize() }} className={styles.tableCell} key={header.id}>
                  {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                  {header.column.getCanResize() && (
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={cl(styles.tableResizer, {
                        [styles.tableResizer_active]: header.column.getIsResizing(),
                      })}></div>
                  )}
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
    </div>
  );
};
