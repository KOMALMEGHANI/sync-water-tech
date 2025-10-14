import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Users, Star } from 'lucide-react';
import heroWaterImage from '../assets/products/hero-section.jpg';
import fuji from '../assets/partners/fuji-electric.png';
import nivelco from '../assets/partners/nivelco.png';
import nowatech from '../assets/partners/nowatech.png';
import phoenix from '../assets/partners/phoenix-contact.png';
import prominent from '../assets/partners/prominent.png';
import rockwell from '../assets/partners/rockwell-automation.png';

export default function ClientsPage() {
  const [formData, setFormData] = useState({ fullName: '', email: '', phone: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clients = [
    { name: 'Fuji Electric', logo: fuji },
    { name: 'Nivelco', logo: nivelco },
    { name: 'Nowatech', logo: nowatech },
    { name: 'Phoenix Contact', logo: phoenix },
    { name: 'ProMinent', logo: prominent },
    { name: 'Rockwell Automation', logo: rockwell },
  ];

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(r => setTimeout(r, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ fullName: '', email: '', phone: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative text-white py-20">
        <img src={heroWaterImage} alt="Clients background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Clients & Partners</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Trusted by industry leaders and institutions across India
            </p>
          </div>
        </div>
      </section>

      {/* Auto-scrolling (marquee) logos */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-10 md:gap-14"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{ width: '200%' }}
            >
              {[...clients, ...clients].map((c, i) => (
                <div key={`${c.name}-${i}`} className="flex-none bg-white rounded-xl border border-gray-200 p-4 shadow-sm flex items-center justify-center h-24 w-44">
                  <img src={c.logo} alt={`${c.name} logo`} className="max-h-12 w-auto object-contain opacity-90" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Named clients grid like the reference */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 border border-indigo-300 text-indigo-700 rounded-full px-4 py-2 mb-4 shadow-sm bg-white">
              <Users className="h-4 w-4" />
              <Star className="h-4 w-4 fill-indigo-400 text-indigo-400" />
              <span className="text-sm font-semibold">Valued Clients</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Serving <span className="text-indigo-600">Government & Private Enterprises</span>
            </h2>
            <p className="text-gray-600 mt-3">Trusted by leading organizations across India for water infrastructure solutions</p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm ring-1 ring-black/5 p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[
                'MP Jal Nigam',
                'MPUDCL Bhopal',
                'Bhopal Municipal Corporation',
                'Indore District Administration',
                'Tikamgarh Nagar Parishads',
                'WRD Bhopal',
                'Prism Cement',
                'Lupin Pharmaceuticals',
                'Vindhyachal Distillery',
                'Central India Pvt Ltd',
                'Dilip Buildcon',
                'Tejas Construction'
              ].map((name) => (
                <div key={name} className="rounded-2xl border border-indigo-100 bg-white p-6 shadow-[0_2px_10px_rgba(99,102,241,0.08)]">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center">
                        <div className="h-4 w-4 rounded-full bg-indigo-300"></div>
                      </div>
                    </div>
                    <div className="font-medium text-gray-900 text-sm md:text-base">
                      {name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact slice like reference */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">We are always ready to help you</h2>
            <p className="text-xl text-gray-700">and answer your questions</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left contact cards */}
            <div className="space-y-6">
              <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 text-[#0073bc] p-3 rounded-xl"><Phone className="h-6 w-6" /></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600 text-sm mb-2">Call us directly for immediate assistance</p>
                    <a href="tel:+919981144987" className="text-[#0073bc] font-medium">+91 99811 44987</a>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 text-[#0073bc] p-3 rounded-xl"><Mail className="h-6 w-6" /></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600 text-sm mb-2">Send us an email for detailed inquiries</p>
                    <a href="mailto:info@syncwatertech@gmail.com" className="text-[#0073bc] font-medium">info@syncwatertech@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 text-[#0073bc] p-3 rounded-xl"><MapPin className="h-6 w-6" /></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600 text-sm mb-2">Visit our office for consultations</p>
                    <a
                      href="https://maps.google.com/?q=12/1+Shalimar+Enclave,+E-3+Area+Colony+Bhopal,+Madhya+Pradesh,+India+462016"
                      target="_blank" rel="noreferrer"
                      className="text-[#0073bc] font-medium"
                    >
                      12/1 Shalimar Enclave, E-3 Area Colony, Bhopal, 462016
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 text-[#0073bc] p-3 rounded-xl"><Clock className="h-6 w-6" /></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600 text-sm">Mon - Fri: 10:00 AM - 7:00 PM</p>
                    <p className="text-gray-600 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right form */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="bg-green-100 rounded-full p-4 inline-block mb-4">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-600">We will get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0073bc] focus:border-transparent outline-none"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0073bc] focus:border-transparent outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0073bc] focus:border-transparent outline-none"
                      placeholder="+91 99811 44987"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      required
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0073bc] focus:border-transparent outline-none resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0073bc] text-white py-4 rounded-lg font-semibold hover:bg-[#005a94] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : (<><span>Send Message</span><Send className="h-5 w-5" /></>)}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


