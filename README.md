# mdoc

Obsidian으로 작성하고 Docusaurus로 배포하는 공개 문서용 Vault입니다.

## 원칙
- 이 저장소는 공개용 문서만 관리합니다.
- 문서는 `docs/` 아래에서 작성합니다.
- 링크는 Obsidian 위키링크(`[[문서]]`) 대신 Markdown 링크를 사용합니다.
- 공용 사이트 이미지는 `static/img/`에 둡니다.
- 문서 전용 이미지는 문서 인접 경로 또는 `docs/assets/` 규칙으로 관리합니다.

## 로컬 실행
```bash
npm install
npm run start
```

## 배포
`main` 브랜치에 push 하면 GitHub Actions가 GitHub Pages에 배포합니다.
