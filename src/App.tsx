import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Countries from "./components/Countries";
import CountryDescription from "./components/CountryDescription";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/description" element={<CountryDescription />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
