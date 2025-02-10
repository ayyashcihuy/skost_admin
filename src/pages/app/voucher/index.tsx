import SmallContainer from "../../../components/vouchers/container/small_container"
import { getFirstRowDescriptions } from "../../../components/vouchers/dummy/container"
import VoucherPageList from "../../../components/vouchers/voucher"

export default function VoucherPage() {
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
            </div>

            <VoucherPageList />
        </div>
    )
}