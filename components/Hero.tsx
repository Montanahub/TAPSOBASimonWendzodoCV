import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, MapPin, ChevronDown, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  // Format phone for WhatsApp link (remove spaces and +)
  const whatsappNumber = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');

  return (
    <section className="relative bg-blue-900 text-white min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')] opacity-5 mix-blend-overlay bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-wider text-yellow-400 uppercase bg-blue-800/40 rounded-full backdrop-blur-md border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.3)]">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>
            Disponible pour opportunités
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-200">
              {PERSONAL_INFO.name}
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-yellow-400 font-light mb-8">
            {PERSONAL_INFO.role}
          </h2>

          <div className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 mb-10 max-w-2xl mx-auto shadow-xl">
            <p className="text-lg text-slate-200 italic leading-relaxed">
              "{PERSONAL_INFO.philosophy}"
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-5 py-3 bg-green-600/20 hover:bg-green-600/40 hover:border-green-500/50 border border-green-500/30 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              <MessageCircle size={18} className="text-green-400 group-hover:scale-110 transition-transform" />
              <span className="text-green-100 group-hover:text-white transition-colors">WhatsApp Direct</span>
            </a>
            
            <a href={`mailto:${PERSONAL_INFO.email}`} className="group flex items-center gap-3 px-5 py-3 bg-blue-800/50 hover:bg-yellow-500/10 hover:border-yellow-500/50 border border-transparent rounded-full transition-all duration-300 backdrop-blur-sm">
              <Mail size={18} className="text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="group-hover:text-yellow-100 transition-colors">{PERSONAL_INFO.email}</span>
            </a>

            <div className="flex items-center gap-3 px-5 py-3 bg-blue-800/30 rounded-full backdrop-blur-sm text-slate-300 border border-white/5">
              <MapPin size={18} className="text-blue-300" />
              <span>Burkina Faso</span>
            </div>
          </div>

          <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 animate-bounce">
            <a href="#skills" className="flex flex-col items-center gap-2 text-slate-400 hover:text-yellow-400 transition-colors cursor-pointer">
              <span className="text-xs uppercase tracking-widest opacity-70">Découvrir</span>
              <ChevronDown size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;