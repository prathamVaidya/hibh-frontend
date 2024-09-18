import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/HomePage";
import Tracker from "./Pages/TrackerPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/tracker/:key" element={<Tracker />} />
        <Route element={Error} />
      </Routes>
      <div>
        <p className="text-center text-small text-muted p-4 my-3">
          Built By <a href="https://github.com/prathamVaidya">Pratham Vaidya</a>
        </p>
      </div>
    </main>
  );
}

export default App;
