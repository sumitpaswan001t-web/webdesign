
export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  color: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Design' | 'Development' | 'Strategy';
}

export interface Testimonial {
  text: string;
  author: string;
  company: string;
  image: string;
}
