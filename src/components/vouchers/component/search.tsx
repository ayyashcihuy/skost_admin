import { SearchIcon } from "lucide-react";

export default function Search() {
    return (
        <div className="relative w-full">
            <input
                type="text"
                className="pl-4 p-2 rounded-sm bg-[#F0F0F0] w-full border border-[#DBDBDB]"
                placeholder="Pencarian"
            />
            <div className="absolute inset-y-0 end-0 flex items-center pr-2 pointer-events-none">
                <SearchIcon className="text-[#757575] p-0.5" />
            </div>
        </div>
    )
}