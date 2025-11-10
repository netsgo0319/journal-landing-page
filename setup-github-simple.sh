#!/bin/bash

# 간단한 GitHub 레포지토리 설정 스크립트
# Xcode 라이선스 문제를 피하기 위해 최소한의 명령어만 실행

echo "🚀 GitHub 레포지토리 설정을 시작합니다..."
echo ""

# 현재 디렉토리 확인
if [ ! -f "package.json" ]; then
    echo "❌ 에러: package.json 파일을 찾을 수 없습니다."
    echo "landing-page 디렉토리에서 실행해주세요."
    exit 1
fi

# Git 초기화 (이미 되어 있으면 스킵)
if [ ! -d ".git" ]; then
    echo "📦 Git 초기화 중..."
    git init
else
    echo "✓ Git이 이미 초기화되어 있습니다."
fi

# Git 사용자 설정 (로컬만, 전역 설정 안 함)
echo "👤 Git 사용자 설정 중..."
git config user.email "netsgo0319@naver.com" 2>/dev/null || true
git config user.name "netsgo0319" 2>/dev/null || true

# 모든 파일 추가
echo "📁 파일 추가 중..."
git add . 2>/dev/null || {
    echo "⚠️  git add 실패. 수동으로 실행해주세요: git add ."
}

# 첫 커밋 (이미 커밋이 있으면 스킵)
if git diff --cached --quiet 2>/dev/null; then
    echo "✓ 변경사항이 없습니다. 이미 커밋되어 있을 수 있습니다."
else
    echo "💾 첫 커밋 생성 중..."
    git commit -m "Initial commit: Landing page setup" 2>/dev/null || {
        echo "⚠️  git commit 실패. 수동으로 실행해주세요: git commit -m 'Initial commit: Landing page setup'"
    }
fi

# 메인 브랜치로 이름 변경
echo "🌿 메인 브랜치로 이름 변경 중..."
git branch -M main 2>/dev/null || true

echo ""
echo "✅ 로컬 Git 설정이 완료되었습니다!"
echo ""
echo "다음 단계:"
echo "1. GitHub에서 레포지토리를 생성하세요: https://github.com/new"
echo "   - Repository name: journal-landing-page"
echo "   - Description: 감사를 강요하지 않는 유일한 일기 앱 - 랜딩 페이지"
echo "   - Visibility: Public"
echo "   - Initialize this repository with: 체크하지 않음"
echo ""
echo "2. 레포지토리를 생성한 후 다음 명령어를 실행하세요:"
echo "   git remote add origin https://github.com/netsgo0319/journal-landing-page.git"
echo "   git push -u origin main"
echo ""
echo "3. GitHub 레포지토리 Settings > Pages에서 GitHub Actions를 선택하세요"
echo ""
echo "4. 배포가 완료되면 다음 URL에서 사이트를 확인할 수 있습니다:"
echo "   https://netsgo0319.github.io/journal-landing-page"
echo ""
echo "⚠️  Xcode 라이선스 에러가 발생하면 setup-github-manual.md를 참고하세요."
echo ""

