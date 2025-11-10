#!/bin/bash

# GitHub 레포지토리 설정 스크립트
# 사용법: bash setup-github.sh

echo "🚀 GitHub 레포지토리 설정을 시작합니다..."
echo ""

# Git 초기화
echo "📦 Git 초기화 중..."
git init

# Git 사용자 설정
echo "👤 Git 사용자 설정 중..."
git config user.email "netsgo0319@naver.com"
git config user.name "netsgo0319"

# 모든 파일 추가
echo "📁 파일 추가 중..."
git add .

# 첫 커밋
echo "💾 첫 커밋 생성 중..."
git commit -m "Initial commit: Landing page setup"

# 메인 브랜치로 이름 변경
echo "🌿 메인 브랜치로 이름 변경 중..."
git branch -M main

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

