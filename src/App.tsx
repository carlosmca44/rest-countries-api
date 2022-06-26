import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Countries = React.lazy(() => import("./components/Countries"));
const CountryDescription = React.lazy(() => import("./components/CountryDescription"));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/description" element={<CountryDescription />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
