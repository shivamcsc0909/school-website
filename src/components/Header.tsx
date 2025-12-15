import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useLanguage();

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/about', label: t('about') },
    { path: '/academics', label: t('academics') },
    { path: '/teachers', label: t('teachers') },
    { path: '/gallery', label: t('gallery') },
    { path: '/events', label: t('events') },
    { path: '/contact', label: t('contact') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white sticky top-0 z-50 border-b-2 border-blue-500 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo Section with colored accent */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-blue-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <img
                src="https://images.fillout.com/orgid-503168/flowpublicid-5bcjrn1sry/widgetid-default/n95MqABNwZiQVHJwbmNdn5/pasted-image-1763202720427.png"
                alt="Yoga Convent School Logo"
                className="h-14 w-14 relative"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                Yoga Convent School
              </h1>
              <p className="text-xs text-gray-600 font-medium">Birbhanpur, Varanasi</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant="ghost"
                  className={`text-sm font-medium relative group/nav ${isActive(item.path)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                    }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transition-transform ${isActive(item.path)
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover/nav:scale-x-100'
                      }`}
                  ></span>
                </Button>
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold ml-3 px-6 shadow-md hover:shadow-lg transition-all">
                {t('admissionEnquiry')}
              </Button>
            </Link>
            <Button
              variant="outline"
              className="ml-2 font-semibold border-blue-600 text-blue-600 hover:bg-blue-50"
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            >
              {language === 'en' ? 'हिंदी' : 'English'}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2 border-t pt-4 mt-2">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start font-medium ${isActive(item.path)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white font-semibold mt-2">
                {t('admissionEnquiry')}
              </Button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
