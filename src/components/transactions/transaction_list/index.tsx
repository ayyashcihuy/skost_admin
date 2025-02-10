import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react"
import Search from "../component/search"
import TransactionTableContent from "../component/table"
import { useState } from "react"
import { dummyTransactionTable } from "../dummy/transaction_table_dummy"
import SortByMenu from "../component/sort_by"
import TypeSelectMenu from "../component/type_select copy"


export default function TransactionPageList() {
    const dummyData = dummyTransactionTable;
    const [ totalPage, _setTotalPage ] = useState<number>(10);
    const [ selectedPage, setSelectedPage ] = useState<number>(1);
    
    return (
        <div className="w-full h-full flex flex-col items-start justify-start gap-y-4 bg-white shadow-md rounded-md p-8 px-10 overflow-hidden h-full">
            <div className="flex flex-col gap-y-4 w-full h-full">
                <div className="w-full h-fit flex flex-row justify-between items-center">
                    <span className="uppercase text-lg font-medium w-full">Data Properti</span>
                    <div className="w-full max-w-[800px] flex flex-row gap-x-4 items-center justify-end">
                        <Search />
                        <TypeSelectMenu />
                        <SortByMenu />
                    </div>
                </div>

                <div className="w-full h-0.5 bg-[#2A2E54] opacity-20" />

                <TransactionTableContent data={dummyData} />

                <div className="w-full h-fit flex flex-row justify-end items-center gap-x-4">
                    <div className="flex flex-row gap-x-4 items-center justify-end w-ful">
                        <ArrowLeftCircle onClick={() => {
                            if (selectedPage > 1) {
                                setSelectedPage(selectedPage - 1)
                            }
                        }} className="cursor-pointer" />
                        <div className="flex flex-row gap-x-4">
                            {
                                [...Array(totalPage).keys()].map((index) => {
                                    return (
                                        <div className={`cursor-pointer flex h-8 w-8 items-center justify-center rounded-full ${index + 1 === selectedPage ? "border border-[#2A2E54]" : "bg-white text-[#2A2E54]"}`} key={index} onClick={() => setSelectedPage(index + 1)}> 
                                            <span>{index + 1}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <ArrowRightCircle onClick={() => {
                            if (selectedPage < totalPage) {
                                setSelectedPage(selectedPage + 1)
                            }
                        }} className="cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    )
}