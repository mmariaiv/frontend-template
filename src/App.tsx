import React from "react";
import { Route, Routes } from "react-router";
import SEO from "@utils/seo.tsx";
import Layout from "@layout/layout";
const Home = React.lazy(() => import("@pages/home"));

function App() {
  return (
    <div className={"body"}>
      <SEO title={""} description={""} keywords={""} />
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
