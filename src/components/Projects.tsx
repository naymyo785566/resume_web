import { Github,  MapPin,  User2, Wrench } from 'lucide-react';

const projects = [
  {
    title: 'User Module Frontend (React)',
    description: 'A responsive and dynamic user module built with React, designed to deliver a smooth user experience with efficient state management and seamless API integration.',
    problem: 'Needed to create an interactive and scalable frontend module that handles user authentication, profile management, and real-time data updates while maintaining clean UI/UX and performance optimization.',
    solution: 'Developed reusable React components, implemented proper state management, integrated RESTful APIs, and optimized rendering performance to ensure a fast and seamless user experience across devices.',
    techStack: ['React', 'TypeScript', 'REST API', 'Axios', 'Context API', 'Tailwind CSS'],
    features: [
      'User authentication & authorization',
      'Profile management system',
      'Real-time data updates',
      'Responsive UI design',
      'API integration with backend services'
    ],
    icon: User2,
    color: 'emerald'
  },
  {
    title: 'Mechanic Management Backend System',
    description: 'A scalable backend system built with Laravel to manage mechanic services, weekly payments, contracts, and service records with structured data relationships and optimized performance.',
    problem: 'The system needed to handle complex relationships between mechanics, services, customers, contracts, and weekly payments while ensuring accurate calculations, proper status tracking, and efficient data retrieval.',
    solution: 'Developed a structured Laravel backend with RESTful APIs, implemented optimized MySQL queries with proper indexing, and designed relational database architecture to ensure fast performance and data consistency. Applied business logic for weekly payment calculations, contract validation, and service tracking.',
    techStack: ['Laravel', 'MySQL', 'Eloquent ORM', 'Docker', 'JWT/Auth'],
    features: [
      'Mechanic weekly payment management',
      'Service & contract relationship handling',
      'Payment status tracking & reporting',
      'Advanced search & filtering',
      'API resource transformation & validation'
    ],
    icon: Wrench,
    color: 'cyan'
  },
  {
    title: 'Location Tracker API',
    description: 'A scalable RESTful API for tracking and monitoring real-time user locations with high accuracy and performance.',
    problem: 'Required handling continuous GPS updates from multiple users while ensuring optimized database storage and fast retrieval of location history.',
    solution: 'Built a secure and efficient Laravel-based API with optimized queries, real-time tracking logic, and structured location history storage.',
    techStack: ['Laravel', 'PostgreSQL', 'REST API', 'JWT / Sanctum', 'AWS / VPS', 'Nginx'],
    features: [
      'Real-time location updates',
      'Location history tracking',
      'Distance calculation',
      'RESTful API architecture',
      'Secure authentication with JWT/Sanctum'
    ],
    icon: MapPin,
    color: 'yellow'
  }
];

const colorClasses = {
  emerald: {
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    glow: 'hover:shadow-emerald-500/20'
  },
  cyan: {
    border: 'border-cyan-500/30',
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    glow: 'hover:shadow-cyan-500/20'
  },
  yellow: {
    border: 'border-yellow-500/30',
    text: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    glow: 'hover:shadow-yellow-500/20'
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-yellow-400">&lt;</span>
            <span className="text-white">Featured Projects</span>
            <span className="text-yellow-400">/&gt;</span>
          </h2>
          <p className="text-gray-400 text-lg font-mono">
            <span className="text-emerald-400">// </span>
            Real-world solutions to complex engineering challenges
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            const colors = colorClasses[project.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className={`bg-[#1a1a1a] rounded-lg p-6 md:p-8 border ${colors.border} hover:border-opacity-60 transition-all duration-300 hover:shadow-xl ${colors.glow} group`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`${colors.bg} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                      <Icon  className={colors.text} size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                  <div className="flex space-x-2">
                    <a href='https://github.com/naymyo785566' target="_blank" className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                      <Github  size={20} className="text-gray-400 hover:text-white" />
                    </a>
                    {/* <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                      <ExternalLink size={20} className="text-gray-400 hover:text-white" />
                    </button> */}
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-red-400 font-semibold mb-2 flex items-center">
                      <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                      Challenge
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className={`${colors.text} font-semibold mb-2 flex items-center`}>
                      <span className={`w-2 h-2 ${colors.bg} ${colors.text} rounded-full mr-2`}></span>
                      Solution
                    </h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-400 text-sm">
                        <span className={`${colors.text} mr-2 mt-1`}>▹</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[#0f0f0f] text-gray-300 rounded text-xs font-mono border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
