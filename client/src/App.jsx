import { Route, Routes } from "react-router-dom";
import MainLayout from "./components/constants/MainLayout";
import Onboard from "./pages/Onboard";
import Home from "./pages/Home";
import Login from "./pages/Login";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Onboard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}
