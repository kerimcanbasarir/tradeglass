import { Routes, Route } from "react-router-dom";
import Home from "././pages/Home";
import Details from "./pages/Details";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/details/:id`} element={<Details />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/register`} element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
