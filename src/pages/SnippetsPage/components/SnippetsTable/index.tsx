import {ColumnDef} from '@tanstack/react-table';
import {useState} from "react";

import {CheckBox} from '@/components/Input/CheckBox';
import {Table} from '@/components/Table';
import TableTabs from "@/components/Table/components/TableTabs";
import {fuzzyFilter} from '@/components/Table/helpers';
import {TSnippets, Ttab} from "@/pages/SnippetsPage/components/SnippetsTable/types";

const columns: ColumnDef<TSnippets>[] = [
    // {
    //     accessorKey: 'select',
    //     header: (info) => (
    //         <CheckBox
    //             name={info.header.id}
    //             checked={info.table.getIsAllRowsSelected()}
    //             handleCheck={info.table.getToggleAllRowsSelectedHandler()}
    //         />
    //     ),
    //     cell: ({row}) => (
    //         <CheckBox name={row.id} checked={row.getIsSelected()} handleCheck={row.getToggleSelectedHandler()}/>
    //     ),
    //     size: 40,
    // },
    {
        accessorKey: 'title',
        header: 'Title',
        cell: (info) => info.getValue(),
        size: 278,
        filterFn: fuzzyFilter,
    },
    {
        accessorKey: 'discription',
        header: 'Discription',
        cell: (info) => info.getValue(),
        size: 785,
    },
    // {
    //     accessorKey: 'created',
    //     header: 'Date created',
    //     cell: (info) => info.getValue(),
    // },
];
const tabData=['public']

type Props={
    data:TSnippets[]
}
export const SnippetsTable:React.FC<Props> = ({data}) => {
    const [tabActive,setActiveTab]=useState<Ttab>('public')
    return (<>
            <TableTabs tabActive={tabActive} setActiveTab={setActiveTab} tabData={tabData}/>
            <Table
                data={data}
                columns={columns}
                // showSelection
                showSearch
                filterFn={fuzzyFilter}
            />
        </>
    );
};