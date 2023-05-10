import {
  ColumnDef,
  FilterFn,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table';
import cl from 'classnames';
import { useState } from 'react';

import { TableSelection } from './components/TableSelection';
import styles from './styles.module.scss';
import { SearchField } from '../SearchField';

type Props<T> = {
  data: T[];
  columns: ColumnDef<T>[];
  headingText?: string;
  showSelection?: boolean;
  filterFn?: FilterFn<T>;
};

export const Table = <T,>({ data, columns, headingText, showSelection = false, filterFn }: Props<T>) => {
  const [rowSelection, setRowSelection] = useState({});
  const [globalFilter, setGlobalFilter] = useState('');

  const handleSetGlobalFilterValue = (value: string) => setGlobalFilter(value);
  const handleRemoveGlobalFilterValue = () => setGlobalFilter('');

  const table = useReactTable({
    data,
    columns,
    state: {
      rowSelection,
      globalFilter,
    },
    columnResizeMode: 'onChange',
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: filterFn,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });
  console.log(globalFilter);
  return (
    <div className={styles.wrapper}>
      {headingText && <h2 className={styles.heading}>{headingText}</h2>}
      <SearchField
        className={styles.search}
        value={globalFilter}
        handleChange={handleSetGlobalFilterValue}
        handleClear={handleRemoveGlobalFilterValue}
      />
      {showSelection && (
        <TableSelection
          numSelected={Object.keys(rowSelection).length}
          numTotal={table.getPreFilteredRowModel().rows.length}
        />
      )}
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
