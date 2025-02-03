import React from "react";
import { useState } from "react";
import NavigationBar from "../../components/Navbar"
import DashboardPage from "./dashboard";
import TransactionPage from "./transaction";
import UserManagementPage from "./user_management";
import VoucherPage from "./voucher";

export default function MainDashboard() {
    const navigationList = [
        "Dashboard", "Transaksi", "Voucher", "User"
    ]
    
    const [ selectedMenu, setSelectedMenu ] = useState<string>("dashboard");

    return (
        <div className="flex flex-row w-full h-screen bg-[#EDEDED]">
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