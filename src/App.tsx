import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

const Countries = React.lazy(() => import("./components/Countries"));
const CountryDescription = React.lazy(
  () => import("./components/CountryDescription")
);

const App: React.FC = () => {
  return (
    <Layout>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route
              path="/description/:countryParam"
              element={<CountryDescription />}
            />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
