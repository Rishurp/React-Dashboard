import { Routes, Route, Navigate } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Home from "./Components/Home";

export const config = {
  backendEndpoint: "https://react-dashboard-dcty.onrender.com/v1",
};

function App() {
  const [token] = useLocalStorage("token", null);

  const ProtectRoute = ({ children }) => {
    if (!token) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectRoute>
            <Home />
          </ProtectRoute>
        }
      ></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
