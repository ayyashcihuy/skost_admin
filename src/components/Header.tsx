import list from "../assets/icon/list.svg";

export default function HeaderBar() {
    return (
        <div className="w-full h-16 sm:hidden flex flex-row justify-between items-center bg-white p-4 shadow-md">
            <img src="/src/assets/icon/bookost_icon_with_text.svg" alt="Bookost logo" className="w-24" />
            <img src={list} alt="Bookost logo" className="w-5" />
        </div>
    )
}