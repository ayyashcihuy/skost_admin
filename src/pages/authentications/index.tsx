import LoginComponent from "./login/login";

export default function LoginPage() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-fit h-fit p-20 bg-white shadow-lg min-w-[600px]">
                <LoginComponent />
            </div>
        </div>
    )
}