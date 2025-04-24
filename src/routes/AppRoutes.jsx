// src/routes/AppRoutes.jsx
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy-loaded components
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Projects = lazy(() => import("../pages/Projects"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;