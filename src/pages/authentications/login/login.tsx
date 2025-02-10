import { useNavigate } from "react-router-dom"
import logo from "../../../assets/icon/bookost_icon_with_text.svg";

export default function LoginComponent() {
    const router = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log(formData);
        router("/dashboard");
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center justify-center space-y-8 px-4" action="#" method="POST">
            <div>
                <img src={logo} alt="Bookost Icon" className="w-50" />
            </div>
            <div className="w-full">
                <label htmlFor="email" className="mb-2 text-sm font-bold text-gray-900">Your email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" placeholder="name@flowbite.com" required />
            </div>
            <div className="w-full">
                <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900">Your password</label>
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5" required />
            </div>
            <div className="flex items-start w-full">
                <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300" required />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">Remember me</label>
            </div>
            <button type="submit" className="w-full text-white bg-[#2A2E54] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Submit</button>
        </form>
    )
}