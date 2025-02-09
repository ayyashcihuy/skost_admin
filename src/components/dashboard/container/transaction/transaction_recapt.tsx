import { Button } from "../../../ui/button";
import HistoryTransactionTable from "./table/history_transaction_table";

export default function TransactionRecapt() {
    return (
        <div className="w-full h-full flex flex-col items-start justify-start gap-y-4 bg-white shadow-md rounded-md p-8 px-10 overflow-hidden">
            <div className="w-full flex flex-row justify-between items-center">
                <h1 className="font-medium text-xl uppercase">Transaksi</h1>
                <Button className="bg-[#2A2E54] text-white">Selengkapnya</Button>
            </div>
            <div className="w-full h-0.5 bg-[#2A2E54] opacity-20" />
            <HistoryTransactionTable />
        </div>
    )
}