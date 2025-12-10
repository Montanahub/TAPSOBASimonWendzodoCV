import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, Globe, ArrowRight, Cloud } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="projects">
      {/* Decorative circle */}
      <div className="absolute -left-20 top-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Mes <span className="text-blue-600">Projets</span>
            </h2>
            <div className="w-20 h-1.5 bg-yellow-400 rounded-full"></div>
          </div>
          <p className="text-slate-600 max-w-md text-right md:text-left">
            Des réalisations concrètes qui démontrent mon savoir-faire en développement frontend, backend et déploiement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col hover:-translate-y-1 h-full">
              <div className="h-48 bg-blue-900 flex items-center justify-center relative overflow-hidden group-hover:bg-blue-800 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-90 z-10"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-500/20 via-transparent to-transparent"></div>
                 
                <Globe className="text-white/20 w-24 h-24 relative z-0 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-700" />
                
                <div className="absolute bottom-4 left-4 z-20">
                   <div className="w-10 h-1 bg-yellow-400 mb-2 rounded-full transform origin-left scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                   <h3 className="text-white font-bold text-xl leading-tight">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">
                  {project.description || "Projet de développement web et application."}
                </p>
                
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full py-3 px-5 bg-slate-50 hover:bg-blue-600 text-slate-700 hover:text-white font-semibold rounded-xl transition-all duration-300 group/btn"
                >
                  <span className="text-sm">Visiter le site</span>
                  <ExternalLink size={16} className="text-blue-500 group-hover/btn:text-yellow-400 transition-colors" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-10 shadow-xl text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-yellow-500 rounded-full opacity-20 blur-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">Note Technique</h3>
              <p className="text-blue-100 mb-6 text-lg">
                  La collaboration et le versioning sont gérés via <strong className="text-yellow-400">Github</strong>.
                  L'hébergement est assuré par des plateformes modernes comme <strong className="text-yellow-400">Render</strong> et <strong className="text-yellow-400">Firebase</strong>.
              </p>
              <div className="inline-flex gap-4 opacity-70">
                <Github className="text-white" size={24} />
                <Cloud className="text-white" size={24} />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;