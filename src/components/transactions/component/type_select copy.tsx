import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";

  

export default function TypeSelectMenu() {
    return (
        <Select>
            <SelectTrigger className="w-1/2 border-[#DBDBDB]">
                <SelectValue placeholder="Semua tipe" />
            </SelectTrigger>
            <SelectContent className="bg-white">
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
    )
}