import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React, { useEffect, Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";

const Hero = lazy(() => import("./components/Hero"));
const AboutSummary = lazy(() => import("./components/AboutSummary"));
const Stats = lazy(() => import("./components/Stats"));
const Features = lazy(() => import("./components/Features"));
const Values = lazy(() => import("./components/Values"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const CTA = lazy(() => import("./components/CTA"));
const Industries = lazy(() => import("./components/Industries"));
const CaseStudies = lazy(() => import("./components/CaseStudies"));
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Careers = lazy(() => import("./components/Careers"));
const Contact = lazy(() => import("./components/Contact"));
const Blog = lazy(() => import("./components/Blog"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-surface">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-full border-4 border-slate-100"></div>
      <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
    </div>
  </div>
);

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-surface selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          {children}
        </Suspense>
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <Layout>
            <Hero />
            <AboutSummary />
            <Stats />
            <Features />
            <Industries />
            <CaseStudies />
            <Values />
            <Testimonials />
            <CTA />
          </Layout>
        } />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/careers" element={<Layout><Careers /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /><CTA /></Layout>} />
      </Routes>
    </Router>
  );
}
