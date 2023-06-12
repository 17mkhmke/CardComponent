import React from "react";
import { DetailsList } from '@fluentui/react';
import { mergeStyleSets } from "office-ui-fabric-react/lib/Styling";
import 'office-ui-fabric-react/dist/css/fabric.css'

const operations = [
    {
        from: '0000 1774 1234 1234 0123',
        to: '0000 2154 0254 2035 4856',
        amount: 'R1 573',
        date: '21-02-2023',
    },
    {
        from: '0000 1234 1474 1234 0123',
        to: '0000 2154 0784 2035 4856',
        amount: 'R50 573',
        date: '21-02-2024',
    },
    {
        from: '0000 1244 1234 1234 0123',
        to: '0000 2154 0284 2035 4856',
        amount: 'R95 573',
        date: '21-02-2025',
    },
    {
        from: '0000 1234 1234 1234 0123',
        to: '0000 2154 0854 74535 4856',
        amount: 'R110 573',
        date: '21-02-2026',
    }
]
const columns = [
    {
        key: 'column1',
        name: 'From',
        fieldname: 'from',
        minWidth: 100,
        maxWidth: 300,
        isResizable: true,
    },
    {
        key: 'column2',
        name: 'To',
        fieldname: 'to',
        minWidth: 100,
        maxWidth: 300,
        isResizable: true,
    },
    {
        key: 'column3',
        name: 'Amount',
        fieldname: 'amount',
        minWidth: 100,
        maxWidth: 300,
        isResizable: true,
    },
    {
        key: 'column4',
        name: 'Date',
        fieldname: 'date',
        minWidth: 100,
        maxWidth: 300,
        isResizable: true,
    },
]

const className = mergeStyleSets({
    table: {
        margin: 'auto',
    }
});;
const OperationsTable = () => {
    return (
        <div data-is-scrollable={true}>
            <div className={`s-Grid-col ms-sm9 ms-xl9 ${className.table}`}>
                <DetailsList
                items={operations}
                columns={columns}
                selectionMode={0}
                />
            </div>
        </div>
    )
}
export default OperationsTable;