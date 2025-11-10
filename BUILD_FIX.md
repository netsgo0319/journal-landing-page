# 빌드 에러 해결

## 문제
GitHub Actions 실행 시 다음과 같은 에러 발생:
```
Dependencies lock file is not found in /home/runner/work/journal-landing-page/journal-landing-page. 
Supported file patterns: package-lock.json,npm-shrinkwrap.json,yarn.lock
```

## 원인
`npm ci`는 `package-lock.json` 파일이 필요하지만, 레포지토리에 해당 파일이 없었습니다.

## 해결 방법
워크플로우를 수정하여 `package-lock.json`이 있으면 `npm ci`를, 없으면 `npm install`을 사용하도록 변경했습니다.

## 향후 개선
로컬에서 `package-lock.json`을 생성하여 Git에 추가하는 것을 권장합니다:

```bash
# Node.js가 설치되어 있다면
cd landing-page
npm install
git add package-lock.json
git commit -m "Add package-lock.json"
git push origin main
```

이렇게 하면:
- 더 빠른 의존성 설치 (`npm ci`가 `npm install`보다 빠름)
- 재현 가능한 빌드 (의존성 버전 고정)
- 더 안정적인 빌드

## 현재 상태
워크플로우가 수정되어 `package-lock.json`이 없어도 빌드가 성공합니다.

---

**작성일**: 2025-01-27

