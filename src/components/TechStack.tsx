import { Code, Server, Database, Container } from 'lucide-react';

const techStack = [
  {
    category: 'Front-end',
    icon: Code,
    color: 'emerald',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS']
  },
  {
    category: 'Back-end',
    icon: Server,
    color: 'cyan',
    skills: [ 'Laravel', 'PHP', 'REST APIs']
  },
  {
    category: 'Database',
    icon: Database,
    color: 'yellow',
    skills: ['MySQL', 'PostgreSQL', 'Query Optimization']
  },
  {
    category: 'Deployment & Tools',
    icon: Container,
    color: 'emerald',
    skills: ['Git', 'AWS', 'CI/CD', 'Linux','Docker']
  }
];

const colorClasses = {
  emerald: {
    border: 'border-emerald-500/30',
    hoverBorder: 'hover:border-emerald-500/60',
    text: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    glow: 'shadow-emerald-500/20'
  },
  cyan: {
    border: 'border-cyan-500/30',
    hoverBorder: 'hover:border-cyan-500/60',
    text: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    glow: 'shadow-cyan-500/20'
  },
  yellow: {
    border: 'border-yellow-500/30',
    hoverBorder: 'hover:border-yellow-500/60',
    text: 'text-yellow-400',
    bg: 'bg-yellow-500/10',
    glow: 'shadow-yellow-500/20'
  }
};

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-cyan-400">&lt;</span>
            <span className="text-white">Tech Stack</span>
            <span className="text-cyan-400">/&gt;</span>
          </h2>
          <p className="text-gray-400 text-lg font-mono">
            <span className="text-emerald-400">// </span>
            Full-stack arsenal for building production-ready applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {techStack.map((stack, index) => {
            const Icon = stack.icon;
            const colors = colorClasses[stack.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className={`bg-[#1a1a1a] rounded-lg p-6 border ${colors.border} ${colors.hoverBorder} transition-all duration-300 hover:shadow-lg ${colors.glow} group`}
              >
                <div className="flex items-center mb-4">
                  <div className={`${colors.bg} p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={colors.text} size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{stack.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {stack.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-3 py-1.5 bg-[#0f0f0f] border ${colors.border} ${colors.text} rounded-md text-sm font-mono hover:${colors.bg} transition-all cursor-default`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-[#1a1a1a] rounded-lg p-8 border border-emerald-500/20">
          <div className="flex items-start space-x-4">
            <div className="text-4xl">🚀</div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Git & Version Control</h3>
              <p className="text-gray-400 leading-relaxed">
                Proficient in Git for version control, enabling efficient collaboration and code management across teams. Experienced with branching strategies, pull requests, and resolving merge conflicts to maintain a clean and organized codebase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
