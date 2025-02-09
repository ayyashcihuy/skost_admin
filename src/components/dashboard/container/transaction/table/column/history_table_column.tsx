
interface HistoryTableColumnProps {
    items: {key: string, value: string}[]
}

export default function HistoryTableColumn({items}: HistoryTableColumnProps) {
    return (
        <div className="w-full h-full flex flex-row justify-between items-center">
            {
                items.map((item, index) => {
                    return (
                        <div key={index} className="flex flex-col">
                            <h1 className="text-[#757575] text-md">{item.key}</h1>
                            <span className="text-[#454545] font-medium">{item.value}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}