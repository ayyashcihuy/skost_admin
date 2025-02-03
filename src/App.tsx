import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/authentications";
import MainDashboard from "./pages/app";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/dashboard" element={<MainDashboard />} />
            </Routes>
        </div>
    )
}

export default App;