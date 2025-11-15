import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import AcademicsPage from '@/pages/AcademicsPage';
import TeachersPage from '@/pages/TeachersPage';
import GalleryPage from '@/pages/GalleryPage';
import EventsPage from '@/pages/EventsPage';
import ContactPage from '@/pages/ContactPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/teachers" element={<TeachersPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingButtons />
        <Toaster />
      </div>
    </Router>
  );
}
