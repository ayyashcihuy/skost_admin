import SmallContainer from "../../../components/dashboard/container/small_container"
import { getFirstRowDescriptions } from "../../../components/transactions/container/dummy"
import TransactionPageList from "../../../components/transactions/transaction_list"
import { Button } from "../../../components/ui/button"

export default function TransactionPage() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-start p-6 gap-y-8">
            <div className="w-full h-fit min-h-[100px] flex flex-row items-center justify-between gap-x-8">
                {
                    getFirstRowDescriptions().map((item, index) => {
                        return (
                            <SmallContainer key={index} props={item} />
                        )
                    })
                }
                <div className="w-full h-full flex flex-col items-center justify-center gap-y-4">
                    <Button className="bg-[#2A2E54] text-white rounded-md px-4 py-2 w-full min-h-[56px]">
                        Tarik Dana
                    </Button>
                    <div className="border border-[#2A2E54] rounded-md p-2 flex flex-row items-center gap-x-2 w-full">
                        <span className="mx-auto text-sm">BCA 1234567 - Hali Yahya Jaya</span>
                    </div>
                </div>
            </div>

            <TransactionPageList />
        </div>
    )
}