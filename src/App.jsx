import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Component/Générique/Nav'
import Footer from './Component/Générique/Footer'
import Login from './Component/Unique/Login'
import SignUp from './Component/Unique/SignUp'
import Upload from './Component/Unique/Upload'
function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
