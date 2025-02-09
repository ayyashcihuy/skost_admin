import HistoryTableColumn from "./column/history_table_column";
import { dummyData } from "./dummy";

export default function HistoryTransactionTable() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-4 bg-white rounded-md overflow-hidden">
            <div className="w-full h-full flex flex-col gap-y-4 justify-between items-center overflow-y-auto">
                {
                    dummyData.map((item, index) => {
                        return (
                            <HistoryTableColumn items={item} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}