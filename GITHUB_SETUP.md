# GitHub 레포지토리 설정 가이드

## 🚀 빠른 설정

### 1. GitHub 레포지토리 생성

1. [GitHub](https://github.com)에 로그인
2. 우측 상단의 **"+"** 버튼 클릭 > **"New repository"** 선택
3. 레포지토리 정보 입력:
   - **Repository name**: `journal-landing-page`
   - **Description**: `감사를 강요하지 않는 유일한 일기 앱 - 랜딩 페이지`
   - **Visibility**: **Public** (GitHub Pages 무료 사용을 위해 필수)
   - **Initialize this repository with**: 체크하지 않음 (이미 파일이 있음)
4. **"Create repository"** 버튼 클릭

### 2. 로컬 Git 초기화 및 푸시

터미널에서 다음 명령어를 실행하세요:

```bash
# landing-page 디렉토리로 이동
cd landing-page

# Git 초기화
git init

# 모든 파일 추가
git add .

# 첫 커밋
git commit -m "Initial commit: Landing page setup"

# 원격 저장소 연결
git remote add origin https://github.com/netsgo0319/journal-landing-page.git

# 메인 브랜치로 이름 변경
git branch -M main

# GitHub에 푸시
git push -u origin main
```

### 3. GitHub Pages 설정

1. GitHub 레포지토리 페이지로 이동: https://github.com/netsgo0319/journal-landing-page
2. **Settings** 탭 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source** 섹션에서:
   - **Deploy from a branch** 선택
   - **Branch**에서 `gh-pages` 선택하고 `/ (root)` 선택
   - 또는 **GitHub Actions** 선택 (권장, 자동 배포)
5. **Save** 클릭

**GitHub Actions 사용 (권장)**:

1. **Settings** > **Pages**로 이동
2. **Source**에서 **GitHub Actions** 선택
3. 저장 (이미 `.github/workflows/deploy.yml` 파일이 있으므로 자동으로 인식됩니다)
4. **Actions** 탭에서 첫 배포가 시작됩니다

### 4. 자동 배포 확인

1. `main` 브랜치에 푸시하면 자동으로 배포가 시작됩니다
2. **Actions** 탭에서 배포 진행 상황을 확인할 수 있습니다
3. 배포가 완료되면 (약 2-3분 소요) 다음 URL에서 사이트를 확인할 수 있습니다:
   - **https://netsgo0319.github.io/journal-landing-page**

### 5. 첫 배포 후 확인사항

- [ ] 사이트가 정상적으로 로드되는지 확인
- [ ] 모든 링크가 작동하는지 확인
- [ ] 모바일에서도 정상적으로 보이는지 확인
- [ ] GitHub 링크가 올바르게 연결되는지 확인

## 🔧 추가 설정

### GitHub Actions 권한 설정

만약 배포가 실패한다면:

1. **Settings** > **Actions** > **General**로 이동
2. **Workflow permissions** 섹션에서:
   - **Read and write permissions** 선택
   - **Allow GitHub Actions to create and approve pull requests** 체크
3. **Save** 클릭

### 커스텀 도메인 (선택사항, 현재 사용 안 함)

나중에 커스텀 도메인을 사용하고 싶다면:

1. `public` 폴더에 `CNAME` 파일 생성
2. 도메인 이름 입력
3. DNS 설정
4. GitHub 레포지토리 Settings > Pages에서 도메인 추가

## 📝 다음 단계

레포지토리 생성 및 배포가 완료되면:

1. 스크린샷 이미지를 `public/images/` 폴더에 추가
2. `Screenshots.tsx`에서 이미지 경로 업데이트
3. 기능 섹션에 일러스트 추가 (선택사항)
4. 기술 스택 섹션에 아키텍처 다이어그램 추가 (선택사항)

## 🐛 문제 해결

### Git 푸시가 실패하는 경우

```bash
# 원격 저장소 확인
git remote -v

# 원격 저장소가 없으면 추가
git remote add origin https://github.com/netsgo0319/journal-landing-page.git

# 강제 푸시 (주의: 기존 파일이 있으면 덮어씀)
git push -u origin main --force
```

### 배포가 실패하는 경우

1. **Actions** 탭에서 에러 로그 확인
2. 로컬에서 빌드 테스트:
   ```bash
   npm install
   npm run build
   ```
3. 빌드가 성공하면 다시 푸시

### 사이트가 표시되지 않는 경우

1. 배포가 완료되었는지 확인 (Actions 탭)
2. URL이 정확한지 확인: `https://netsgo0319.github.io/journal-landing-page`
3. 브라우저 캐시를 지우고 다시 시도
4. 몇 분 기다린 후 다시 시도 (배포에 시간이 걸릴 수 있음)

## 📚 참고 자료

- [GitHub Pages 문서](https://docs.github.com/pages)
- [GitHub Actions 문서](https://docs.github.com/actions)
- [DEPLOYMENT.md](./DEPLOYMENT.md) - 상세 배포 가이드

---

**작성일**: 2025-01-27

