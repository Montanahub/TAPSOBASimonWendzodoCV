export interface Project {
  title: string;
  url: string;
  description?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface PersonalInfo {
  name: string;
  role: string;
  phone: string;
  email: string;
  languages: string[];
  philosophy: string;
  otherInfo: string;
}