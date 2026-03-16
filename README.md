# Dotori Portfolio (Docusaurus + GitHub Pages)

Docusaurus 기반 GitHub Pages용 포트폴리오 템플릿입니다.

## 1) 설치

```bash
npm install
```

## 2) 로컬 실행

```bash
npm run start
```

## 3) GitHub Pages 설정 전 필수 수정

`docusaurus.config.ts`의 아래 값을 본인 정보로 바꿔주세요.

- `url`: `https://<github-username>.github.io`
- `baseUrl`: `/<repo-name>/`
- `organizationName`: `<github-username>`
- `projectName`: `<repo-name>`
- navbar의 GitHub 링크

## 4) 배포

### 방법 A: GitHub Actions (권장)

이미 `.github/workflows/deploy.yml`이 포함되어 있습니다.

1. GitHub 저장소에서 **Settings > Pages** 이동
2. **Build and deployment**를 `GitHub Actions`로 설정
3. `main` 브랜치에 푸시하면 자동 배포

### 방법 B: CLI 배포

```bash
GIT_USER=<github-username> npm run deploy
```

## 문서 추가

`docs/` 폴더에 Markdown 파일을 추가하면 자동으로 사이드바에 반영됩니다.


## 트러블슈팅

### "바이너리 파일 지원되지 않음" 에러가 날 때

일부 코드리뷰/패치 도구는 `*.ico` 같은 바이너리 파일 diff를 제대로 처리하지 못합니다.
이 저장소는 해당 문제를 피하기 위해 텍스트 기반인 `static/img/favicon.svg`를 사용합니다.

이미 바이너리 파일이 커밋된 상태라면 아래처럼 교체 후 다시 커밋하세요.

```bash
git rm --cached static/img/favicon.ico
# svg 파일 추가/수정
git add static/img/favicon.svg docusaurus.config.ts
git commit -m "Replace binary favicon with svg"
```
