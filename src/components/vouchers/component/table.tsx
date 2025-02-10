import { convertVoucherStatusToColor, convertVoucherStatusToString, convertVoucherTypeToString } from "../../../model/vouchers"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../../ui/table"

export default function VoucherTableContent({ data } : { data: { id: string, user_id: string, voucher_type: number, status: number, redeem: Date | undefined, updated: Date, created: Date }[] }) {
    return (
        <Table className="w-full h-full">
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>User ID</TableHead>
                    <TableHead>Tipe</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Redeem</TableHead>
                    <TableHead>Update</TableHead>
                    <TableHead>Dibuat</TableHead>
                    <TableHead>Action</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    data && data.map((item: {id: string, user_id: string, voucher_type: number, status: number, redeem: Date | undefined, updated: Date, created: Date}, index) => {
                        return (
                            <TableRow key={index}>
                                <TableCell>{item.id}</TableCell>
                                <TableCell>{item.user_id}</TableCell>
                                <TableCell>{convertVoucherTypeToString(item.voucher_type)}</TableCell>
                                <TableCell className={`${convertVoucherStatusToColor(item.status)}`}>{convertVoucherStatusToString(item.status)}</TableCell>
                                <TableCell>{item.redeem ? item.redeem.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' }) : "-"}</TableCell>
                                <TableCell>{item.updated.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</TableCell>
                                <TableCell>{item.created.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}</TableCell>
                                <TableCell>
                                    <div className="flex flex-row gap-x-4">
                                        <div className="flex flex-row gap-x-4 items-center justify-end w-ful">
                                            <div className="cursor-pointer">
                                                <span>Edit</span>
                                            </div>
                                            <div className="cursor-pointer">
                                                <span>Hapus</span>
                                            </div>
                                        </div>
                                    </div>
                                </TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    )
}