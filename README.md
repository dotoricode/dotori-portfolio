# Dotori Portfolio

Docusaurus 3.8.1 기반 개인 포트폴리오 사이트. GitHub Pages로 배포됩니다.

## 구성

| 페이지 | 경로 | 설명 |
|--------|------|------|
| 메인 | `/` | 히어로 섹션 (프로필, CTA 버튼) |
| 자기소개 | `/about` | 소개, 핵심 역량, 관심 분야 |
| 프로젝트 | `/projects` | 프로젝트 카드 그리드 쇼케이스 |
| 기술스택 | `/skills` | 카테고리별 기술 뱃지 |
| 경력 | `/career` | 수직 타임라인 경력 정보 |
| 연락처 | `/contact` | 이메일, GitHub, LinkedIn |

## 빠른 시작

```bash
npm install
npm run start
```

## 개인 정보 설정

배포 전 아래 파일들을 본인 정보로 수정하세요:

**`docusaurus.config.ts`**
```ts
url: 'https://<github-username>.github.io',
baseUrl: '/<repo-name>/',
organizationName: '<github-username>',
projectName: '<repo-name>',
```

**콘텐츠 파일**
- `src/pages/index.tsx` — 이름, 직함, 소개 문구
- `src/data/projects.ts` — 프로젝트 목록
- `src/data/skills.ts` — 기술 스택
- `src/data/career.ts` — 경력 사항
- `docs/about.md` — 자기소개
- `docs/contact.md` — 연락처
- `static/img/profile-placeholder.svg` — 프로필 이미지

## 배포

### GitHub Actions (권장)

1. GitHub 저장소 **Settings > Pages** → Source를 `GitHub Actions`로 설정
2. `main` 브랜치에 푸시하면 자동 배포

### 수동 배포

```bash
GIT_USER=<github-username> npm run deploy
```

## 기술 스택

- **프레임워크:** Docusaurus 3.8.1
- **언어:** TypeScript, React 18
- **배포:** GitHub Pages + GitHub Actions
- **다국어:** 한국어(기본), 영어

## 다국어 지원

- 기본 언어: 한국어(`ko`)
- 추가 언어: 영어(`en`) — 네비게이션 우측 언어 드롭다운으로 전환
- 영어 문서: `i18n/en/docusaurus-plugin-content-docs/current/`

## 프로젝트 구조

```
dotori-portfolio/
├── docs/                    # 포트폴리오 페이지 (Markdown/MDX)
│   ├── about.md
│   ├── projects.mdx
│   ├── skills.mdx
│   ├── career.mdx
│   ├── contact.md
│   └── DEVELOPMENT_LOG.md  # 개발 작업 로그
├── src/
│   ├── components/          # React 컴포넌트
│   │   ├── ProjectCard/
│   │   ├── SkillBadge/
│   │   └── Timeline/
│   ├── data/                # 정적 데이터
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── career.ts
│   ├── css/custom.css       # 전역 스타일
│   └── pages/index.tsx      # 메인 히어로 페이지
├── static/img/              # 이미지 파일
└── .github/workflows/       # GitHub Actions 배포 워크플로우
```

## 트러블슈팅

### 빌드 오류 시

```bash
npm run build
```

오류 메시지를 확인하세요. MDX 파일의 import 경로가 `@site/src/...` 형태인지 확인하세요.

### 바이너리 파일 관련 오류

이 저장소는 텍스트 기반 `static/img/favicon.svg`를 사용합니다. `.ico` 등 바이너리 파일이 필요한 경우:

```bash
git rm --cached static/img/favicon.ico
git add static/img/favicon.svg
git commit -m "Replace binary favicon with svg"
```
