export interface CareerEntry {
  id: string;
  organization: string;
  role: string;
  period: { start: string; end: string | 'present' };
  description: string;
  highlights: string[];
}

export const careerEntries: CareerEntry[] = [
  {
    id: 'job1',
    organization: '(주)ABC 테크',
    role: '풀스택 개발자',
    period: { start: '2022.03', end: 'present' },
    description: '웹 서비스 개발 및 유지보수를 담당하고 있습니다.',
    highlights: ['React + TypeScript 기반 프론트엔드 리팩토링', 'Node.js API 서버 성능 개선 (응답속도 30% 향상)', 'CI/CD 파이프라인 구축 (GitHub Actions)'],
  },
  {
    id: 'job2',
    organization: '(주)XYZ 솔루션',
    role: '주니어 개발자',
    period: { start: '2020.07', end: '2022.02' },
    description: '사내 관리 시스템 개발을 담당하였습니다.',
    highlights: ['Django 기반 관리자 대시보드 개발', 'PostgreSQL 데이터베이스 설계 및 최적화', 'REST API 설계 및 문서화'],
  },
];
