import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, Globe, Award, Briefcase } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappNumber = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');

  return (
    <footer className="bg-slate-900 text-white py-20 border-t border-slate-800" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-24">
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">
              <span className="text-blue-500">{PERSONAL_INFO.name.split(' ')[0]}</span> {PERSONAL_INFO.name.split(' ').slice(1).join(' ')}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Développeur  passionné par l'innovation numérique, transformant les défis en solutions élégantes.
            </p>
            <div className="flex flex-wrap gap-2">
                {PERSONAL_INFO.languages.map((lang, idx) => (
                    <span key={idx} className="text-xs font-semibold px-3 py-1.5 bg-blue-900/50 rounded-lg border border-blue-800 text-blue-200">
                        {lang}
                    </span>
                ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-yellow-500 rounded-full"></span>
              Coordonnées
            </h4>
            <ul className="space-y-6">
              <li>
                <a 
                  href={`https://wa.me/${whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-slate-300 hover:text-white transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                    <Phone size={18} className="text-yellow-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">WhatsApp / Tel</span>
                    <span className="text-lg">{PERSONAL_INFO.phone}</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Mail size={18} className="text-yellow-500 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500">Email</span>
                    <span>{PERSONAL_INFO.email}</span>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-4 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                  <MapPin size={18} className="text-yellow-500" />
                </div>
                <span>Ouagadougou, Burkina Faso</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white flex items-center gap-2">
              <span className="w-1.5 h-6 bg-yellow-500 rounded-full"></span>
              Autres Informations
            </h4>
            <div className="space-y-4">
              
              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-blue-700 transition-colors flex gap-3">
                <Briefcase className="text-yellow-400 shrink-0 mt-1" size={20} />
                <div>
                  <h5 className="font-semibold text-sm text-blue-200 mb-1">Accompagnement</h5>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    J'accompagne les investisseurs qui veulent s'installer ici au Burkina Faso.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-blue-700 transition-colors flex gap-3">
                <Award className="text-yellow-400 shrink-0 mt-1" size={20} />
                <div>
                  <h5 className="font-semibold text-sm text-blue-200 mb-1">Formation</h5>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Formation certifiante sur la Gouvernance de l'Internet.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Simon Tapsoba. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;