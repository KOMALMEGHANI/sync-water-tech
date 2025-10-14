import { useState, useEffect } from 'react';
import { Mail, Briefcase, Target, Building2, ChevronLeft, ChevronRight, Award, Users } from 'lucide-react';
import subHeadingImage from '../assets/products/sub-heading.jpg';
import heroWaterImage from '../assets/products/hero-section.jpg';
import ourTeamIcon from '../assets/icon/Our Team.png';
import rohitImg from '../assets/team/rohit-arora-2.jpg';
import vijayImg from '../assets/team/vijay-tiwari-2.jpg';
import officeFounderCabin from '../assets/sync-water-tech-new-office-founder-cabin.jpg';
import officeOutside1 from '../assets/sync-water-tech-new-office-pictures-outside-1.jpg';
import officeOutside from '../assets/sync-water-tech-new-office-pictures-outside.jpg';
import officeReception from '../assets/sync-water-tech-new-office-reception.jpg';
import digitalMonitoring from '../assets/digital-monitoring.jpg';

export default function TeamPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const team = [
    {
      name: 'Rohit Arora',
      role: 'Co-Founder & CEO',
      email: 'rohit@syncwatertech.com',
      description: 'Visionary leader with expertise in water infrastructure and sustainable technology solutions',
      photo: rohitImg
    },
    {
      name: 'Vijay Tiwari',
      role: 'Co-Founder & CTO',
      email: 'vijay@syncwatertech.com',
      description: 'Technical expert specializing in automation, IoT, and advanced water treatment systems',
      photo: vijayImg
    }
  ];

  // Office images in the specified order: Outside View 1 → Reception → Founder Cabin
  const officeImages = [
    { src: officeOutside1, caption: 'Office Outside View 1' },
    { src: officeReception, caption: 'Reception Area' },
    { src: officeFounderCabin, caption: 'Founder Cabin' }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % officeImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [officeImages.length]);

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? officeImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % officeImages.length);
  };


  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative text-white py-20">
        <img src={heroWaterImage} alt="Water technology background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src={ourTeamIcon} alt="Our Team icon" className="h-20 w-20 mx-auto mb-6 opacity-90 object-contain" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Team
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Meet the visionaries driving water innovation
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Visionaries
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in water technology and infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={`${member.name} photo`}
                    className="w-28 h-28 rounded-full object-cover mx-auto mb-6 ring-4 ring-[#0073bc]/10 shadow-sm"
                    loading="lazy"
                  />
                ) : (
                  <div className="bg-gradient-to-br from-[#0073bc] to-[#005a94] rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-[#0073bc] font-semibold text-center mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {member.description}
                </p>
                <div className="flex items-center justify-center space-x-2 text-gray-700">
                  <Mail className="h-4 w-4 text-[#0073bc]" />
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sm hover:text-[#0073bc] transition-colors"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Legacy/Experience/Team highlight cards */}
          <div className="mt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-indigo-200 bg-white p-6 shadow-[0_8px_30px_rgba(99,102,241,0.08)]">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                    <Award className="h-6 w-6 text-indigo-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">40-Year Legacy</h3>
                  <p className="text-gray-600 text-sm">Built on Rajat Engineering's steel staging and chlorination expertise</p>
                </div>
              </div>
              <div className="rounded-2xl border border-indigo-200 bg-white p-6 shadow-[0_8px_30px_rgba(99,102,241,0.08)]">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                    <Briefcase className="h-6 w-6 text-indigo-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">27-Year Automation Experience</h3>
                  <p className="text-gray-600 text-sm">Orbit Engineering's strength in automation and SCADA systems</p>
                </div>
              </div>
              <div className="rounded-2xl border border-indigo-200 bg-white p-6 shadow-[0_8px_30px_rgba(99,102,241,0.08)]">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mb-3">
                    <Users className="h-6 w-6 text-indigo-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Disciplinary Team</h3>
                  <p className="text-gray-600 text-sm">Engineers, project leads, marketing strategists, and finance experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Office Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Building2 className="h-12 w-12 mx-auto mb-4 text-[#0073bc]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our New Office
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A modern workspace designed to foster innovation and collaboration in water technology
            </p>
          </div>

          {/* Office Images Carousel */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Main Image Display */}
              <div className="relative h-96 md:h-[500px] overflow-hidden">
                <img
                  src={officeImages[currentImageIndex].src}
                  alt={officeImages[currentImageIndex].caption}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                
                

                {/* Navigation Arrows */}
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
                >
                  <ChevronLeft className="h-6 w-6 text-gray-700" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-3 shadow-lg transition-all duration-200"
                >
                  <ChevronRight className="h-6 w-6 text-gray-700" />
                </button>
              </div>

              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 p-6">
                {officeImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentImageIndex
                        ? 'bg-[#0073bc] scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              {/* Image Description */}
              <div className="px-6 pb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {officeImages[currentImageIndex].caption}
                </h3>
                <p className="text-gray-600">
                  Modern office space designed for productivity and innovation in water technology solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Briefcase className="h-12 w-12 mx-auto mb-4 text-[#0073bc]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Be part of a team that's making a real difference in water infrastructure and sustainability
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Join Sync Water Tech?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#0073bc] bg-opacity-10 rounded-lg p-2">
                    <Target className="h-5 w-5 text-[#0073bc]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Meaningful Work</h4>
                    <p className="text-sm text-gray-600">
                      Work on projects that impact millions of lives
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#0073bc] bg-opacity-10 rounded-lg p-2">
                    <Target className="h-5 w-5 text-[#0073bc]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Innovation Culture</h4>
                    <p className="text-sm text-gray-600">
                      Work with cutting-edge technology
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#0073bc] bg-opacity-10 rounded-lg p-2">
                    <Target className="h-5 w-5 text-[#0073bc]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Growth Opportunities</h4>
                    <p className="text-sm text-gray-600">
                      Continuous learning and career development
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#0073bc] bg-opacity-10 rounded-lg p-2">
                    <Target className="h-5 w-5 text-[#0073bc]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Collaborative Team</h4>
                    <p className="text-sm text-gray-600">
                      Work with passionate, talented professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      

      {/* Callout: Join a Pioneering Force in Water Technology */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-10">
            {/* Centered heading like a section title */}
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                Join a Pioneering Force in <span className="text-[#3b82f6]">Water Technology</span>
              </h2>
              <p className="text-gray-600">
                Are you a mechanical or electrical engineer eager to make an impact?
              </p>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>

                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#3b82f6]"></span>
                    <p>
                      Innovate in a dynamic, fast-growing water-tech environment.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#3b82f6]"></span>
                    <p>
                      Collaborate with seasoned professionals across technologies—from traditional water treatment systems to advanced automation.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#3b82f6]"></span>
                    <p>
                      Build your career through meaningful projects with strong mentorship and competitive benefits.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-gray-900 font-semibold">
                    Ready to be part of a team that shapes sustainable water infrastructure solutions?
                  </p>
                </div>
              </div>

              <div>
                <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                  <img
                    src={digitalMonitoring}
                    alt="Engineers collaborating with digital water technology"
                    className="w-full h-72 md:h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Contact row */}
            {/* Contact row */}
            <div className="mt-8 pt-6 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="text-gray-700">
                <div className="text-gray-900 font-semibold mb-1">Address</div>
                <div>
                  12/1 Shalimar Enclave, E-3 Area Colony<br />
                  Bhopal, Madhya Pradesh, 462016
                </div>
              </div>
              <div className="text-gray-700">
                <div className="text-gray-900 font-semibold mb-1">Call us:</div>
                <a href="tel:+919981144987" className="text-[#0073bc] hover:underline">+91 99811 44987</a>
              </div>
              <div className="text-gray-700">
                <div className="text-gray-900 font-semibold mb-1">Write to us:</div>
                <a href="mailto:info@syncwatertech@gmail.com" className="text-[#0073bc] hover:underline">info@syncwatertech@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
