import React from "react";
import Movies from "./Components/Movies";
import SingleMovie from "./Components/SingleMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="movie/:id" element={<SingleMovie />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
