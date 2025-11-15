import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="https://images.fillout.com/orgid-503168/flowpublicid-5bcjrn1sry/widgetid-default/n95MqABNwZiQVHJwbmNdn5/pasted-image-1763202720427.png" 
                alt="Yoga Convent School Logo" 
                className="h-12 w-12"
              />
              <h3 className="text-xl font-bold">Yoga Convent School</h3>
            </div>
            <p className="text-sm opacity-90">
              Committed to providing quality education and nurturing young minds for a brighter future.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/academics" className="hover:underline">Academics</Link></li>
              <li><Link to="/teachers" className="hover:underline">Teachers</Link></li>
              <li><Link to="/events" className="hover:underline">Events</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@yogaconvent.edu.in</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Birghanpur, Varanasi, Uttar Pradesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Yoga Convent School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
