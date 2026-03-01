import { Terminal, Code } from 'lucide-react';
import { useEffect, useState } from 'react';

const codeSnippets = [
  `const backend = await buildAPI({
  framework: 'Laravel',
  database: 'MySQL',
  architecture: 'RESTful'
});`,
  `function deployApp() {
  docker.build();
  aws.deploy();
}`,
  `const fullStack = {
  frontend: ['React', 'TypeScript'],
  backend: ['Node.js', 'Laravel'],
  devops: ['Docker', 'AWS']
};`
];

export default function Hero() {
  const [currentCode, setCurrentCode] = useState(0);
  const [displayedCode, setDisplayedCode] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const code = codeSnippets[currentCode];

    if (charIndex < code.length) {
      const timeout = setTimeout(() => {
        setDisplayedCode(code.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setDisplayedCode('');
        setCurrentCode((prev) => (prev + 1) % codeSnippets.length);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentCode]);

  return (
    <section className="min-h-screen bg-[#0a0a0a] relative overflow-hidden flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-yellow-500/5"></div>

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-6xl w-full">
        <div className="bg-[#1e1e1e] rounded-lg shadow-2xl border border-emerald-500/20 overflow-hidden backdrop-blur-sm">
          <div className="bg-[#2d2d2d] px-4 py-2 flex items-center justify-between border-b border-emerald-500/20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <Code size={16} />
              <span>portfolio.tsx</span>
            </div>
            <div className="w-20"></div>
          </div>

          <div className="p-8 md:p-12 font-mono">
            <div className="mb-8">
              <div className="flex items-center space-x-2 text-emerald-400 mb-2">
                <Terminal size={20} />
                <span className="text-sm">~/developer</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-gray-400">const</span>{' '}
                <span className="text-cyan-400">developer</span>{' '}
                <span className="text-gray-400">=</span>{' '}
                <span className="text-yellow-400">"Full Stack Developer"</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 mb-2">
                <span className="text-emerald-400">// </span>
                Name | Nay Myo
              </p>
                <p className="text-lg md:text-xl text-gray-400 mb-2">
                <span className="text-emerald-400">// </span>
                Phone no | +959785566110
              </p>
                
           
              
              {/* <p className="text-base md:text-lg text-gray-500">
                <span className="text-emerald-400">// </span>
                Passionate about building scalable web applications and exploring new technologies. Always eager to learn and grow as a developer.
              </p> */}
            </div>

            <div className="bg-[#1a1a1a] rounded-lg p-6 border border-emerald-500/10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-cyan-500 to-yellow-500"></div>
              <pre className="text-sm md:text-base text-gray-300 leading-relaxed min-h-[120px]">
                <code>
                  {displayedCode}
                  <span className="inline-block w-2 h-5 bg-emerald-400 ml-1 animate-pulse"></span>
                </code>
              </pre>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-emerald-500 text-black font-semibold rounded-lg hover:bg-emerald-400 transition-all hover:shadow-lg hover:shadow-emerald-500/50 transform hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 bg-transparent border-2 border-emerald-500 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500/10 transition-all hover:shadow-lg hover:shadow-emerald-500/30"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
