import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";
import Register from "./Components/Register";
import Verify from "./Components/Verify";
import Main from "./Components/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="space-y-6">
              <Nav main={false} />
              <Register />
            </div>
          }
        />
        <Route
          path="/verify"
          element={
            <div className="space-y-6">
              <Nav main={false} />
              <Verify />
            </div>
          }
        />
        <Route
          path="/main"
          element={
            <div className="space-y-6">
              <Nav main={true} />
              <Main />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
