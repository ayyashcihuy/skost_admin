import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/authentications";
import MainDashboard from "./pages/app";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<MainDashboard />} />
        </Routes>
    )
}

export default App;