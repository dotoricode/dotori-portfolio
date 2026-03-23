export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  githubUrl?: string;
  demoUrl?: string;
  period: string;
}

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: '개인 포트폴리오 사이트',
    description: 'Docusaurus 기반의 개인 포트폴리오 사이트. GitHub Pages로 배포.',
    techStack: ['TypeScript', 'React', 'Docusaurus', 'GitHub Actions'],
    githubUrl: 'https://github.com/yourusername/dotori-portfolio',
    demoUrl: 'https://yourusername.github.io/dotori-portfolio',
    period: '2024.01 - 현재',
  },
  {
    id: 'todo-app',
    title: '할일 관리 앱',
    description: '실시간 동기화를 지원하는 할일 관리 웹 애플리케이션.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
    githubUrl: 'https://github.com/yourusername/todo-app',
    period: '2023.06 - 2023.12',
  },
  {
    id: 'api-server',
    title: 'REST API 서버',
    description: 'TypeScript와 Express로 구축한 RESTful API 서버.',
    techStack: ['TypeScript', 'Express', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/yourusername/api-server',
    period: '2023.01 - 2023.05',
  },
];
