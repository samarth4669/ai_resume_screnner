import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Screening from "./pages/Screening";
import Dashboard from './pages/Dashboard';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <BrowserRouter>
     <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        limit={3}
        theme="light"
      />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/screen" element={<Screening/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>

      </Routes>
      

    </BrowserRouter>
  );
}

export default App;