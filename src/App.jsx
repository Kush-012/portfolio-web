import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Sheet from "./pages/sheet";
import Nav from "./components/nav";
import Roadmap from "./pages/roadmap";
import Hrqs from "./pages/hrqs";
import Blogs from "./pages/blogs";
import About from "./pages/about";

import TermsAndConditions from "./formalities/TermsAndConditions";
import PrivacyPolicy from "./formalities/PrivacyPolicy";

export default function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hrqs" element={<Hrqs />} />

        {/* Roadmap routes */}
        <Route path="/roadmap" element={<Navigate to="/roadmap/data-science" />} />
        <Route path="/roadmap/:role" element={<Roadmap />} />

        <Route path="/dsasheet" element={<Sheet />} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}