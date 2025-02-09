import { ChartComponent } from "../../../components/dashboard/chart/chart_container";
import { getFirstRowDescriptions } from "../../../components/dashboard/container/actions";
import PropertyTable from "../../../components/dashboard/container/property/property_table";
import SmallContainer from "../../../components/dashboard/container/small_container";
import TransactionRecapt from "../../../components/dashboard/container/transaction/transaction_recapt";

export default function DashboardPage() {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center p-6 gap-y-8">
            <div className="w-full h-fit flex flex-row items-center justify-between gap-x-8">
                {
                    getFirstRowDescriptions().map((item, index) => {
                        return (
                            <SmallContainer key={index} props={item} />
                        )
                    })
                }
            </div>
            <div className="w-full h-full flex flex-row gap-x-8">
                <ChartComponent />
                <TransactionRecapt />
            </div>
            <div className="w-full h-full flex">
                <PropertyTable />
            </div>
        </div>
    )
}