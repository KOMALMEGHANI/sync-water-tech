import { useState } from 'react';
import { MapPin, Building, Droplets, CheckCircle, Clock } from 'lucide-react';
const projectsHero = new URL('../assets/products/hero-section.jpg', import.meta.url).href;

interface ProjectsPageProps {
  initialFilter?: 'all' | 'completed' | 'ongoing';
}

const Projects = ({ initialFilter = 'all' }: ProjectsPageProps) => {
  const tabs: Array<{ key: 'all' | 'completed' | 'ongoing'; label: string }> = [
    { key: 'all', label: 'All' },
    { key: 'completed', label: 'Completed' },
    { key: 'ongoing', label: 'Ongoing' },
  ];
  const [activeTab, setActiveTab] = useState<'all' | 'completed' | 'ongoing'>(initialFilter);
  const completedProjects = [
    {
      name: "Kymore & Vijayraghavgarh (Package 5D)",
      client: "MPUDCL Bhopal",
      value: "₹34.60 Lakh",
      location: "Madhya Pradesh",
      year: "2023",
      status: "Completed",
      description: "Complete automation system with PLC & SCADA integration"
    },
    {
      name: "Amarpatan & Ramnagar (Package 7D)",
      client: "MPUDCL Bhopal",
      value: "₹1.37 Crore",
      location: "Madhya Pradesh",
      year: "2023",
      status: "Completed",
      description: "Turnkey water management solution with advanced monitoring"
    },
    {
      name: "Harpalpur & Badagaon (Package 6G)",
      client: "MPUDCL Bhopal",
      value: "₹43.45 Lakh",
      location: "Madhya Pradesh",
      year: "2023",
      status: "Completed",
      description: "Smart water distribution system with IoT integration"
    },
    {
      name: "Bankhedi Turnkey Project",
      client: "Central India Pvt Ltd",
      value: "₹27 Lakh",
      location: "Madhya Pradesh",
      year: "2023",
      status: "Completed",
      description: "End-to-end water treatment plant automation"
    },
    {
      name: "KARI & Lidhorakhas Water Meter SITC",
      client: "Tikamgarh Nagar Parishads",
      value: "₹85.80 Lakh",
      location: "Tikamgarh",
      year: "2023",
      status: "Completed",
      description: "Smart water metering and monitoring system"
    },
    {
      name: "Gangadhar Meher Lift Irrigation Project",
      client: "WRD Bhopal",
      value: "₹74.74 Lakh",
      location: "Madhya Pradesh",
      year: "2023",
      status: "Completed",
      description: "Irrigation automation with lift management system"
    }
  ];

  const ongoingProjects = [
    {
      name: "Gandhisagar Package 2",
      client: "MP Jal Nigam - Dilip Buildcon",
      value: "₹10.87 Crore",
      location: "District Neemach",
      status: "Ongoing",
      description: "Multi-village water supply scheme automation"
    },
    {
      name: "Beohari Multi-Village Scheme",
      client: "MP Jal Nigam - Tejas Construction",
      value: "₹1.49 Crore",
      location: "Shahdol",
      status: "Ongoing",
      description: "Comprehensive village water management system"
    },
    {
      name: "Rewa Bansagar Scheme",
      client: "MP Jal Nigam - Dilip Buildcon",
      value: "₹14.24 Crore",
      location: "District Rewa",
      status: "Ongoing",
      description: "Large-scale water distribution automation"
    },
    {
      name: "Pahargarh Multi-Village Scheme",
      client: "MP Jal Nigam - KNK Projects",
      value: "₹27.54 Lakh",
      location: "District Rajgarh",
      status: "Ongoing",
      description: "Rural water supply automation project"
    },
    {
      name: "Narmada Gabhir Multi-Village Scheme",
      client: "MP Jal Nigam - Dilip Buildcon",
      value: "₹10.34 Crore",
      location: "District Ujjain",
      status: "Ongoing",
      description: "Advanced water management for multiple villages"
    },
    {
      name: "Gohad Water Supply Scheme",
      client: "MPUDCL Bhopal - Shree Contractor",
      value: "₹50.04 Lakh",
      location: "Madhya Pradesh",
      status: "Ongoing",
      description: "Modern water supply system with full automation"
    }
  ];

  const milestones = [
    {
      year: "2015",
      client: "Prism Cement, Satna",
      project: "Humidity & Temperature Control System",
      value: "₹4.50 Crore",
      description: "Delivered a humidity and temperature control turnkey automation system, redefining industrial climate regulation."
    },
    {
      year: "2016",
      client: "Lupin, Mandideep",
      project: "RO Plant Automation",
      value: "₹18 Lakh",
      description: "Executed a turnkey automation project for the reverse osmosis plant enhancing water purity assurance"
    },
    {
      year: "2017",
      client: "Vindhayachal Distillery, Pilukhedi (Bhopal)",
      project: "40 KL Turnkey Automation",
      value: "₹2.50 Crore",
      description: "Commissioned a 40 KL turnkey automation project, optimising distillery operations with precision control"
    },
    {
      year: "2018",
      client: "Bhopal Municipal Corporation, Idgah Hills",
      project: "3 MGD Water Treatment Plant",
      value: "₹25 Lakh",
      description: "Implemented a 3 MGD water treatment plant with turnkey automation, raising municipal water reliability."
    },
    {
      year: "2020",
      client: "MP Jal Nigam, Punjapura (Neemuch, Badhwani)",
      project: "Turnkey Instrumentation",
      value: "₹28 Lakh",
      description: "Completed a turnkey instrumentation project, strengthening regional water management capacity"
    },
    {
      year: "2021",
      client: "Indore District (Betma, Gautampura, Depalpur)",
      project: "Water Supply Scheme Automation",
      value: "₹12.68 Lakh",
      description: "Delivered a fully integrated water supply scheme automation, enhancing service delivery accuracy"
    },
    {
      year: "2022",
      client: "Betul‑Bazar, Amla & Sarni Nagar Parishads (MP)",
      project: "45 MLD Turnkey Automation",
      value: "₹13.19 Lakh",
      description: "Executed a 45 MLD turnkey automation project, significantly boosting urban water infrastructure"
    },
    {
      year: "2023",
      client: "Gobranawapra STP (Raipur, C.G.)",
      project: "7.6 MLD Sewage Treatment Plant",
      value: "₹11.74 Lakh",
      description: "Commissioned a 7.6 MLD sewage treatment plant, advancing environmental compliance through turnkey instrumentation and automation."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="relative text-white py-20">
        <img src={projectsHero} alt="Projects background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative text-center">
            <span className="inline-block text-xs font-semibold tracking-wide uppercase text-white/90 bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-3">Project Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">Our Projects</h1>
            <p className="text-blue-100">Delivered with PLC, SCADA, IoT and turnkey automation</p>
          </div>
          <div className="relative mt-8 flex items-center justify-center gap-2">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveTab(t.key)}
                className={`px-4 py-2 rounded-full text-sm border transition-colors ${
                  activeTab === t.key
                    ? 'bg-white/20 text-white border-white/30 backdrop-blur'
                    : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Completed Projects - moved after Hero */}
      {(activeTab === 'all' || activeTab === 'completed') && (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900"><CheckCircle className="inline-block h-6 w-6 mr-2 text-green-600"/>Completed Works</h2>
            <span className="text-xs px-3 py-1 rounded-full border border-green-600 text-green-700">Delivered</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedProjects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs px-2 py-1 rounded bg-green-50 text-green-700 border border-green-100">{project.status}</span>
                  <div className="text-right text-[#0073bc] font-bold">{project.value}</div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{project.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center"><Building className="h-4 w-4 mr-2"/>{project.client}</div>
                  <div className="flex items-center"><MapPin className="h-4 w-4 mr-2"/>{project.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}


      {/* Milestones Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              <Droplets className="h-8 w-8 inline-block mr-3 text-accent" />
              Our Milestones
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              These milestones illustrate our unwavering commitment to scalable turnkey automation solutions,
              grounded in robust project execution, technological excellence, and enduring impact across
              industrial, municipal, and water‑utility sectors.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-[#0073bc] via-blue-300 to-[#0073bc] opacity-40"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className="hover-lift shadow-[0_10px_25px_-10px_rgba(59,130,246,0.35)] bg-white border border-blue-200 rounded-2xl">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs px-3 py-1 rounded-full border border-blue-400 text-blue-600 bg-blue-50">{milestone.year}</span>
                          <div className="text-xl font-extrabold text-blue-700">{milestone.value}</div>
                        </div>
                        <h3 className="font-semibold text-center text-lg text-gray-900 mb-1">{milestone.project}</h3>
                        <p className="text-sm text-center text-gray-500 mb-3">{milestone.client}</p>
                        <p className="text-sm text-gray-700 text-center leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="relative z-10 w-8 h-8 bg-white border-4 border-blue-500 rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full ring-4 ring-blue-200"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Projects - moved to last */}
      {(activeTab === 'all' || activeTab === 'ongoing') && (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900"><Clock className="inline-block h-6 w-6 mr-2 text-amber-600"/>Ongoing Projects</h2>
            <span className="text-xs px-3 py-1 rounded-full border border-amber-600 text-amber-700">In Progress</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ongoingProjects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs px-2 py-1 rounded bg-amber-50 text-amber-700 border border-amber-100">{project.status}</span>
                  <div className="text-right text-[#0073bc] font-bold">{project.value}</div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{project.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center"><Building className="h-4 w-4 mr-2"/>{project.client}</div>
                  <div className="flex items-center"><MapPin className="h-4 w-4 mr-2"/>{project.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
    </div>
  );
};

export default Projects;