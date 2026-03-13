---
sidebar_position: 11
---

# 작성 규칙

## 1. 링크 규칙

Obsidian 전용 위키링크 대신 Markdown 링크를 사용합니다.

좋음:

```md
[빠른 시작](../getting-started/quickstart.md)
```

지양:

```md
[[빠른 시작]]
```

## 2. 파일명 규칙

- 영문 소문자 + 하이픈 권장
- 공백 대신 `-` 사용

## 3. 문서 메타데이터

모든 공개 문서는 front matter를 권장합니다.

```md
---
title: 문서 제목
sidebar_position: 20
---
```
