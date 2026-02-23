import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { ServiceDetail } from "./pages/ServiceDetail";
import { About } from "./pages/About";
import { Blog, BlogDetail } from "./pages/Blog";
import { Booking } from "./pages/Booking";
import { trackEvent } from "./lib/analytics";

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let eventName = 'view_page';
    
    if (path === '/') eventName = 'view_home';
    else if (path === '/services') eventName = 'view_services';
    else if (path.startsWith('/services/')) eventName = 'view_service';
    else if (path === '/booking') eventName = 'begin_booking';
    
    trackEvent(eventName, { path });
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Layout>
    </Router>
  );
}
