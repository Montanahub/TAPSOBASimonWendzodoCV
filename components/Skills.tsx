import React from 'react';
import { SKILL_CATEGORIES } from '../constants';
import { Layout, Database, Cloud, CheckCircle2 } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'layout': return <Layout className="w-8 h-8 text-yellow-500" />;
      case 'database': return <Database className="w-8 h-8 text-yellow-500" />;
      case 'cloud': return <Cloud className="w-8 h-8 text-yellow-500" />;
      default: return <CheckCircle2 className="w-8 h-8 text-yellow-500" />;
    }
  };

  return (
    <section className="py-24 bg-white relative" id="skills">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Compétences <span className="text-blue-600">Techniques</span>
          </h2>
          <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            Une expertise technique diversifiée permettant de transformer des idées complexes en solutions numériques performantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((category, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-2xl hover:shadow-blue-900/10 hover:border-blue-100 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-colors duration-300 shadow-inner">
                <div className="group-hover:text-white transition-colors duration-300">
                  {getIcon(category.icon)}
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-6 group-hover:text-blue-600 transition-colors">
                {category.title}
              </h3>
              <ul className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700 font-medium group-hover:text-slate-900 transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;