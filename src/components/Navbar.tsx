import { useNavigate } from "react-router-dom";

interface Props {
    navigationList: string[]
    selectedMenu: string
    setSelectedMenu: React.Dispatch<React.SetStateAction<string>>
}

export default function NavigationBar({ navigationList, selectedMenu, setSelectedMenu }: Props) {
    const navigate = useNavigate();
    
    return (
        <div className="sm:flex hidden sm:w-[200px] bg-white h-full py-10 flex-col gap-y-10 justify-between shadow-lg">
            <div className="flex flex-col gap-y-8">
                <img src="/src/assets/icon/bookost_icon_with_text.svg" alt="Bookost logo" className="w-36 ml-6" />
                <div className="flex flex-col">
                    {
                        navigationList.map((item, index) => {
                            return (
                                <div onClick={() => {
                                    setSelectedMenu(item.toLocaleLowerCase())
                                }} key={index} className={`w-full p-4 font-light cursor-pointer ${selectedMenu === item.toLocaleLowerCase() ? "bg-[#2A2E54] text-white hover:opacity-80 animation duration-200" : null}`}>
                                    {item}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="flex flex-col gap-y-4 w-full px-4">
                <div className="flex flex-col items-center text-sm">
                    <h1>Hi User!</h1>
                    <p>Bergabung 2025</p>
                </div>
                <button onClick={() => navigate("/")} className="w-full bg-[#E74C3C] rounded-md p-2 text-white animation duration-200 hover:opacity-80 cursor-pointer">
                    Logout
                </button>
            </div>
        </div>
    )
}