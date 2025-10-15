import { Cloud, Droplets, Settings, X } from 'lucide-react';
import iconInnovation from '../assets/icon/Innovation-Driven.png';
import villageProject from '../assets/village-project-2.jpg';
import automationSystems from '../assets/automation-systems.jpg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import heroGirl from '../assets/hero-village-girl.jpg';
import iconOnlineWorksManagement from '../assets/icon/Online Works Management System flaticon.png';
import iconFusionTech from '../assets/icon/Fusion Tech.png';
// icons below are unused on the homepage after layout updates
// keeping imports removed to satisfy linter

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate: _onNavigate }: HomePageProps) {
  const [showLearnMore, setShowLearnMore] = useState(false);

  

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-[#0073bc] via-[#005a94] to-[#004870] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="max-w-3xl lg:pr-10">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0 }}
              >
                Water Tech for a Greener, Resilient and Sustainable Tomorrow
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
              >
                Sync Water Tech Pvt Ltd propels water management beyond convention — harnessing cutting-edge process automation, SCADA, Industry 4.0, cloud technologies, and precision instrumentation to solve real-world water challenges in rural and urban India.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowLearnMore(true)}
                  className="px-8 py-4 bg-white text-[#0073bc] rounded-full font-semibold transition-all duration-300 transform hover:scale-[1.03] hover:bg-blue-50"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative lg:pl-6">
              <motion.img
                src={heroGirl}
                alt="Village girl drinking water from a tap"
                className="w-full h-auto max-h-[420px] object-cover rounded-2xl shadow-2xl ring-1 ring-white/20"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      

      {/* Centered intro block like the reference */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 text-gray-700 rounded-full px-4 py-2 mb-6 shadow-sm">
            <img src={iconInnovation} alt="Innovative Technology" className="h-5 w-5" />
            <span className="text-sm font-medium">Innovative Technology</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
            Innovative Tech to{' '}
            <span className="text-[#3b82f6]">Drive Sustainable Water</span>
            <br />
            Management
          </h2>
          <div className="max-w-xl mx-auto">
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img
                src={villageProject}
                alt="Community water access"
                className="w-full h-auto object-cover max-h-[360px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Automation of Water Systems highlight (moved below Innovative Tech) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Automation of Water Systems
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Sync Water Tech specialises in advanced automation — adopting state-of-the-art
                technologies to enhance water-resource management, efficiency, and sustainability.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><span className="text-[#0073bc] mr-2">•</span><span>SCADA + IoT integration for real-time monitoring and control</span></li>
                <li className="flex items-start"><span className="text-[#0073bc] mr-2">•</span><span>Data-driven decision-making and predictive maintenance</span></li>
                <li className="flex items-start"><span className="text-[#0073bc] mr-2">•</span><span>Precise distribution control to reduce losses and improve efficiency</span></li>
              </ul>
            </div>
            <div className="lg:pl-6">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
                <img
                  src={automationSystems}
                  alt="Automation of water infrastructure"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-black/60 backdrop-blur-sm text-white rounded-lg px-3 py-2 shadow-md">
                    <div className="text-sm font-semibold">Upper Lake Water Infrastructure</div>
                    <div className="text-xs opacity-90">Advanced automation systems in action</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Online Works Management System (OWMS) detailed section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <img src={iconOnlineWorksManagement} alt="Online Works Management System icon" className="h-8 w-8 object-contain" />
              <span className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 text-gray-700 rounded-full px-4 py-2 text-sm font-medium">Digital Management</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Online Works Management System</h2>
            <p className="text-[#3b82f6] font-semibold mb-6">(OWMS)</p>
            <p className="text-gray-700 leading-relaxed max-w-3xl mb-8">
              Our Online Works Management System completely digitises and streamlines public-works project management—delivering efficiency, transparency and timely execution.
            </p>
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#3b82f6]"></span>
                <p>Digital, centralised workflow from planning to completion on one unified platform.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#3b82f6]"></span>
                <p>Full transparency and accountability with live updates on status, resources and contractor performance.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#3b82f6]"></span>
                <p>Enhanced speed and efficiency, eliminating delays and accelerating approvals, execution and delivery.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#3b82f6]"></span>
                <p>Real-time monitoring and evaluation through automated tracking of progress and resource usage.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-2 w-2 h-2 rounded-full bg-[#3b82f6]"></span>
                <p>OWMS empowers civic agencies to deliver infrastructure projects faster, smarter and with greater public trust.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fusion Tech detailed section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 md:p-8">
            <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 text-gray-700 rounded-full px-4 py-2 mb-6 shadow-sm">
              <img src={iconFusionTech} alt="Fusion Technology" className="h-5 w-5" />
              <span className="text-sm font-medium">Fusion Technology</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fusion Tech: Durable Joints, Compact Treatment, <span className="text-[#3b82f6]">Sustainable Water</span>
            </h2>
            <p className="text-gray-700 leading-relaxed max-w-4xl mb-10">
              "Fusion" technologies are pivotal in delivering resilient, sustainable water infrastructure. From weld-strength pipe joints to compact, high-performance wastewater treatment systems, fusion engineering upholds water system integrity and ecological responsibility.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Seamless, durable joints:</h3>
                <p className="text-gray-700">Butt-fusion welding creates homogeneous bonds as strong as the pipe itself, delivering exceptional resistance to leaks and corrosion—critical for long-lasting distribution networks and challenging environments.</p>
                <h3 className="text-lg font-semibold text-gray-900">Flexible, precise installations:</h3>
                <p className="text-gray-700">Electrofusion utilises fittings with internal heating coils to melt and unite PE pipes under current—ideal for repairs, complex configurations, and confined spaces.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Compact, efficient wastewater treatment:</h3>
                <p className="text-gray-700">The Clarus Fusion Series are drop-in units delivering superior secondary effluent outcomes.</p>
                <h3 className="text-lg font-semibold text-gray-900">Low power consumption & environmental gains:</h3>
                <p className="text-gray-700">These treatment systems operate using under 80 W (for smaller models), with non-corrosive materials and lifetime media warranty, ensuring both energy efficiency and long-term reliability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Water Solutions cards (as per reference), placed below Fusion Tech */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
              Smart Water Solutions,
              <span className="block text-[#3b82f6]">Real‑Time Control — Turnkey Treatment, One Source</span>
            </h2>
            <p className="text-gray-700">
              At Sync Water Tech, we deliver comprehensive, cutting-edge water and wastewater treatment solutions. Our expertise spans water treatment plants, sewage and effluent systems, and cloud‑enabled IoT automation. We offer a robust portfolio — from RO systems, DM and UF units, to STPs in ASP, MBBR, and MBR configurations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-full bg-blue-50 flex items-center justify-center">
                  <Droplets className="h-5 w-5 text-[#3b82f6]" />
                </div>
                <h3 className="text-lg font-semibold">End-to-End Treatment Systems</h3>
              </div>
              <p className="text-gray-700">Our automation suite includes PLC panels, sensors, and remote monitoring tools. With high performance chemicals and genuine spare parts like membranes and FRP vessels, we ensure optimal system longevity.</p>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-9 w-9 rounded-full bg-blue-50 flex items-center justify-center">
                  <Cloud className="h-5 w-5 text-[#3b82f6]" />
                </div>
                <h3 className="text-lg font-semibold">Smart Water Solutions</h3>
              </div>
              <p className="text-gray-700">Installation, commissioning, consultancy, and turnkey O&M across treatment systems—plus expert design, GPS survey, automation deployment and tailored optimization for sustainable, efficient control.</p>
            </div>
          </div>

          <div className="mt-5 bg-white rounded-xl border border-gray-200 shadow-sm p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-full bg-blue-50 flex items-center justify-center">
                <Settings className="h-5 w-5 text-[#3b82f6]" />
              </div>
              <h3 className="text-lg font-semibold">Technical Services</h3>
              <span className="ml-auto text-xs bg-blue-50 text-[#3b82f6] rounded-full px-3 py-1">Turnkey & O&M</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
              <ul className="space-y-2">
                <li>Installation & commissioning of WTP, STP, RO, ETP systems</li>
                <li>Consultancy in design, process control, and automation</li>
                <li>Operations & maintenance (O&M) services for all water systems</li>
              </ul>
              <ul className="space-y-2">
                <li>Drawing/design services and GPS survey work (incl. 33kV/11kV/LT line mapping)</li>
                <li>Turnkey automation & secure cloud deployment solutions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      

      

      {showLearnMore && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50" onClick={() => setShowLearnMore(false)}>
          <div
            className="w-full md:max-w-3xl bg-white text-gray-800 rounded-t-2xl md:rounded-2xl shadow-2xl p-6 md:p-8 mx-0 md:mx-4 animate-fade-in animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-[#0073bc]">About Sync Water Tech</h3>
              <button aria-label="Close" onClick={() => setShowLearnMore(false)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Founded in April 2022 in Bhopal, the company builds on a legacy exceeding four decades of engineering excellence through its parent firms, Rajat Engineering and Orbit Engineering, to deliver turnkey systems — from design and steel fabrication to PLC/SCADA integration and long-term O&M—through an ISO 9001-certified quality framework that guarantees reliability and ecological accountability.
              </p>
              <p>
                Our ambition is to lead in water innovation — offering holistic, sustainable, and affordable solutions that elevate access to clean water, optimise resource management, and uplift communities.
              </p>
              
              <p>
                A Clear Mission: innovate with purpose, deliver with integrity, and deliver water systems grounded in environmental stewardship and social well-being—empowering quality water infrastructure across India and beyond.
              </p>
              <p>
                At Sync Water Tech, every project is a promise fulfilled — for a cleaner, more resilient tomorrow.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
