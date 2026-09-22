import { Route, Routes } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import About1Page from "@/pages/About1Page";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import Contact1Page from "@/pages/Contact1Page";
import Home2Page from "@/pages/Home2Page";
import Portfolio1Page from "@/pages/Portfolio1Page";
import Services1Page from "@/pages/Services1Page";
import NotFoundPage from "@/pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout headerStyle={2} footerStyle={2} />}>
        <Route path="/" element={<Home2Page />} />
        <Route path="/about" element={<About1Page />} />
        <Route path="/services" element={<Services1Page />} />
        <Route path="/work" element={<Portfolio1Page />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/contact" element={<Contact1Page />} />
      </Route>
      <Route element={<MainLayout headerStyle={2} footerStyle={2} />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
