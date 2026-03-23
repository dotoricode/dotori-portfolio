export type SkillCategory = 'language' | 'framework' | 'tool' | 'database' | 'other';
export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
}

export const skills: Skill[] = [
  { name: 'TypeScript', category: 'language', level: 'advanced' },
  { name: 'JavaScript', category: 'language', level: 'expert' },
  { name: 'Python', category: 'language', level: 'intermediate' },
  { name: 'React', category: 'framework', level: 'advanced' },
  { name: 'Node.js', category: 'framework', level: 'advanced' },
  { name: 'Express', category: 'framework', level: 'intermediate' },
  { name: 'Docusaurus', category: 'framework', level: 'intermediate' },
  { name: 'Git', category: 'tool', level: 'advanced' },
  { name: 'Docker', category: 'tool', level: 'intermediate' },
  { name: 'GitHub Actions', category: 'tool', level: 'intermediate' },
  { name: 'PostgreSQL', category: 'database', level: 'intermediate' },
  { name: 'MongoDB', category: 'database', level: 'beginner' },
];
