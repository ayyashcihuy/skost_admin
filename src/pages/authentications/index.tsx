import LoginComponent from "./login/login";

export default function LoginPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-full h-full sm:h-fit flex p-20 bg-white shadow-lg max-w-[600px] rounded-md">
                <LoginComponent />
            </div>
        </div>
    )
}