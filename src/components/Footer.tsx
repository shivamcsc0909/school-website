import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://images.fillout.com/orgid-503168/flowpublicid-5bcjrn1sry/widgetid-default/n95MqABNwZiQVHJwbmNdn5/pasted-image-1763202720427.png"
                alt="Yoga Convent School Logo"
                className="h-16 w-16"
              />
              <h3 className="text-xl font-bold">{t('schoolName')}</h3>
            </div>
            <p className="text-sm opacity-90">
              {t('footerDescription')}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:underline">{t('about')}</Link></li>
              <li><Link to="/academics" className="hover:underline">{t('academics')}</Link></li>
              <li><Link to="/teachers" className="hover:underline">{t('teachers')}</Link></li>
              <li><Link to="/events" className="hover:underline">{t('events')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('contactInformation')}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91-9415981641</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@yogaconvent.edu.in</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Bhirbhanpur, Varanasi Uttar Pradesh Near Bhairavnath Mandir Varanasi Uttar Pradesh India - 221311 .</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-90 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>&copy; {new Date().getFullYear()} {t('copyrightText')}</p>
          <p>
            {t('developedBy')} <a href="https://rankriseusa.com" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 font-semibold transition-colors">RankRiseUSA</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
