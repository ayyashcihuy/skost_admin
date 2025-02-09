import { useState } from "react";
import NavigationBar from "../../components/Navbar"
import DashboardPage from "./dashboard";
import TransactionPage from "./transaction";
import UserManagementPage from "./user_management";
import VoucherPage from "./voucher";
import HeaderBar from "../../components/Header";

export default function MainDashboard() {
    const navigationList = [
        "Dashboard", "Transaksi", "Voucher", "User"
    ]
    
    const [ selectedMenu, setSelectedMenu ] = useState<string>("dashboard");

    return (
        <div className="flex sm:flex-row flex-col w-full sm:h-screen h-full sm:max-h-screen bg-[#EDEDED]"> 
            <HeaderBar />

            <NavigationBar navigationList={navigationList} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
            
            {
                selectedMenu === "dashboard" ? 
                <DashboardPage />
                :
                selectedMenu === "transaksi" ?
                <TransactionPage />
                :
                selectedMenu === "voucher" ?
                <VoucherPage />
                :
                selectedMenu === "user" ?
                <UserManagementPage />
                :
                null
            }
        </div>
    )
}