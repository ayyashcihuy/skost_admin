import { convertAmountToIDRString, convertTransactionStatusToColor, convertTransactionStatusToString, convertTransactionTypeToString } from "../../../model/transactions"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table"

export default function TransactionTableContent({ data }: { data: { date: Date, transaction_type: number, property: string, amount: number, customer_name: string, status: number }[] }) {
    return (
        <Table className="w-full h-full">
            <TableHeader>
                <TableRow>
                    <TableHead>Tanggal</TableHead>
                    <TableHead>Jam</TableHead>
                    <TableHead>Tipe</TableHead>
                    <TableHead>Properti</TableHead>
                    <TableHead>Nominal</TableHead>
                    <TableHead>Nama</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data && data.map((item, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{item.date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</TableCell>
                                <TableCell>{item.date.toLocaleTimeString()}</TableCell>
                                <TableCell>{convertTransactionTypeToString(item.transaction_type)}</TableCell>
                                <TableCell>{item.property}</TableCell>
                                <TableCell>{convertAmountToIDRString(item.amount)}</TableCell>
                                <TableCell>{item.customer_name}</TableCell>
                                <TableCell className={`${convertTransactionStatusToColor(item.status)}`}>{convertTransactionStatusToString(item.status)}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    )
}