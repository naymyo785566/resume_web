import { Code2, Server, Database, Cloud } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative">
                <img
                  src="/naymyo.png"
                  alt="Profile"
                  className="rounded-lg w-full max-w-sm mx-auto border-2 border-emerald-500/30"
                />
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-emerald-400">&lt;</span>
              <span className="text-white">About</span>
              <span className="text-emerald-400">/&gt;</span>
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I'm a <span className="text-emerald-400 font-semibold">Full Stack Developer</span> with a strong, end-to-end understanding of modern web technology. I specialize in building scalable, high-performance applications that seamlessly connect beautiful user interfaces with robust backend systems.
              </p>

              <p>
                My expertise lies in crafting <span className="text-cyan-400">dynamic front-ends with React</span>, architecting <span className="text-yellow-400">powerful APIs with Laravel</span>, and managing complex data relationships with MySQL. But what truly sets me apart is my deep understanding of infrastructure and deployment.
              </p>

              <p>
                I'm the developer who <span className="text-emerald-400 font-semibold">connects design and server architecture into one seamless system</span>. I ensure that user interface ideas are properly supported by strong, scalable backend infrastructure. I have a knack for understanding how to optimize performance, security, and scalability across the entire stack, making me a true full-stack developer who can handle every aspect of the development process.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="bg-[#1a1a1a] p-4 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
                  <Code2 className="text-emerald-400 mb-2 group-hover:scale-110 transition-transform" size={24} />
                  <p className="text-sm font-semibold">Frontend</p>
                  <p className="text-xs text-gray-500">React & UI</p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all group">
                  <Server className="text-cyan-400 mb-2 group-hover:scale-110 transition-transform" size={24} />
                  <p className="text-sm font-semibold">Backend</p>
                  <p className="text-xs text-gray-500"> Laravel</p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all group">
                  <Database className="text-yellow-400 mb-2 group-hover:scale-110 transition-transform" size={24} />
                  <p className="text-sm font-semibold">Database</p>
                  <p className="text-xs text-gray-500">MySQL & PostgreSQL</p>
                </div>
                <div className="bg-[#1a1a1a] p-4 rounded-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
                  <Cloud className="text-emerald-400 mb-2 group-hover:scale-110 transition-transform" size={24} />
                  <p className="text-sm font-semibold">Deployment</p>
                  <p className="text-xs text-gray-500">AWS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
