import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Projects', page: 'projects' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Products', page: 'products' },
    { label: 'FAQ', page: 'faq' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold text-white mb-4">
              Sync Water Tech
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Pioneering water innovation for sustainable communities
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#0073bc] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#0073bc] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-sm text-gray-400 hover:text-[#0073bc] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#0073bc] flex-shrink-0 mt-0.5" />
                <a 
                  href="https://maps.google.com/?q=12/1+Shalimar+Enclave,+E-3+Area+Colony+Bhopal,+Madhya+Pradesh,+India+462016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-[#0073bc] transition-colors cursor-pointer"
                >
                  12/1 Shalimar Enclave,<br />
                  E-3 Area Colony Bhopal,<br />
                  Madhya Pradesh,<br />
                  India(Bharat)- 462016
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#0073bc] flex-shrink-0" />
                <a 
                  href="tel:+919981144987"
                  className="text-sm hover:text-[#0073bc] transition-colors cursor-pointer"
                >
                  +91 99811 44987
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#0073bc] flex-shrink-0" />
                <a 
                  href="mailto:info@syncwatertech@gmail.com"
                  className="text-sm hover:text-[#0073bc] transition-colors cursor-pointer"
                >
                  info@syncwatertech@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Monday - Friday: 10:00 AM - 7:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Sync Water Tech Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
