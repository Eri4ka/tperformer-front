import { ColumnDef } from '@tanstack/react-table';

import { CheckBox } from '@/components/Input/CheckBox';
import { Table } from '@/components/Table';
import { fuzzyFilter } from '@/components/Table/helpers';
import { TCanvas } from '@/mytypes/canvas';

const defaultData: TCanvas[] = [
  {
    title: 'Title',
    сontent: 'Text about canvas ',
    created: '5/3/2023',
  },
  {
    title: 'Titme',
    сontent: 'Text about canvas ',
    created: '1/3/2023',
  },
];

const columns: ColumnDef<TCanvas>[] = [
  {
    accessorKey: 'select',
    header: (info) => (
      <CheckBox
        name={info.header.id}
        checked={info.table.getIsAllRowsSelected()}
        handleCheck={info.table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }) => (
      <CheckBox name={row.id} checked={row.getIsSelected()} handleCheck={row.getToggleSelectedHandler()} />
    ),
    size: 40,
  },
  {
    accessorKey: 'title',
    header: 'Title',
    cell: (info) => info.getValue(),
    size: 278,
    filterFn: fuzzyFilter,
  },
  {
    accessorKey: 'сontent',
    header: 'Сontent',
    cell: (info) => info.getValue(),
    size: 785,
  },
  {
    accessorKey: 'created',
    header: 'Date created',
    cell: (info) => info.getValue(),
  },
];

export const CanvasTable = () => {
  return (
    <Table
      data={defaultData}
      columns={columns}
      headingText='All canvases'
      showSelection
      showSearch
      filterFn={fuzzyFilter}
    />
  );
};
