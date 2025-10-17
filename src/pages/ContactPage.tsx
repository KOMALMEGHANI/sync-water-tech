import { useState } from 'react';
import subHeadingImage from '../assets/products/sub-heading.jpg';
import heroWaterImage from '../assets/products/hero-section.jpg';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setIsSubmitting(false);
    setFormData({ fullName: '', email: '', phone: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative text-white py-20">
        <img src={heroWaterImage} alt="Water technology background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Mail className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Let's discuss how we can help with your water infrastructure needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div id="contact-form">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you're planning a new water treatment facility, looking to upgrade existing infrastructure, or need technical consultation, our team is ready to help. Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <motion.div 
                  className="flex items-start space-x-4 contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                  <div className="bg-[#0073bc] bg-opacity-10 rounded-xl p-3">
                    <MapPin className="h-6 w-6 text-[#0073bc]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <a 
                      href="https://maps.google.com/?q=12/1+Shalimar+Enclave,+E-3+Area+Colony+Bhopal,+Madhya+Pradesh,+India+462016"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#0073bc] transition-colors cursor-pointer"
                    >
                      12/1 Shalimar Enclave,<br />
                      E-3 Area Colony Bhopal,<br />
                      Madhya Pradesh,<br />
                      India(Bharat)- 462016
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4 contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-[#0073bc] bg-opacity-10 rounded-xl p-3">
                    <Phone className="h-6 w-6 text-[#0073bc]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a 
                      href="tel:+919981144987"
                      className="text-gray-600 hover:text-[#0073bc] transition-colors cursor-pointer"
                    >
                      +91 99811 44987
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-start space-x-4 contact-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-[#0073bc] bg-opacity-10 rounded-xl p-3">
                    <Mail className="h-6 w-6 text-[#0073bc]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a 
                      href="mailto:info@syncwatertech@gmail.com"
                      className="text-gray-600 hover:text-[#0073bc] transition-colors cursor-pointer"
                    >
                      info@syncwatertech@gmail.com
                    </a>
                  </div>
                </motion.div>
              </div>

              <motion.div 
                className="mt-12 bg-gradient-to-br from-[#0073bc] to-[#005a94] rounded-2xl p-8 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2 text-blue-100">
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Monday - Friday: 10:00 AM - 7:00 PM
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    Saturday: 10:00 AM - 4:00 PM
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    Sunday: Closed
                  </motion.p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  send us a message
                </h3>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="bg-green-100 rounded-full p-4 inline-block mb-4">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h4>
                    <p className="text-gray-600">
                      Thank you for contacting us. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0073bc] focus:border-transparent transition-all outline-none"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0073bc] focus:border-transparent transition-all outline-none"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0073bc] focus:border-transparent transition-all outline-none"
                        placeholder="+91 99811 44987"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0073bc] focus:border-transparent transition-all outline-none resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#0073bc] text-white py-4 rounded-lg font-semibold hover:bg-[#005a94] transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl overflow-hidden mb-8">
            <img src={subHeadingImage} alt="Section background" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 py-10 px-4 text-center">
              <h2 className="text-3xl font-bold text-white mb-2">
                Our Location
              </h2>
              <p className="text-blue-100">
                Visit us at our office in Bhopal
              </p>
            </div>
          </div>
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.1234567890123!2d77.4125!3d23.2599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDE1JzM1LjYiTiA3N8KwMjQnNDUuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sync Water Tech Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
