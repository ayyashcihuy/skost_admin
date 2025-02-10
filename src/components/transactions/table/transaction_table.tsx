import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table"

export default function TransactionTableContent({ data }: { data: any[] }) {
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
                                <TableCell>{index + 1}</TableCell>
                                <TableCell className={item.status === "Booked" ? "text-[#E74C3C]" : "text-[#33C13B]"}>{item.status}</TableCell>
                                <TableCell>{item.room_type}</TableCell>
                                <TableCell>{item.date_start}</TableCell>
                                <TableCell>{item.date_end}</TableCell>
                                <TableCell>{item.customer_name}</TableCell>
                                <TableCell>{item.customer_phone}</TableCell>
                                <TableCell>{item.payment_status}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    )
}