import { Github, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-surface border-t border-neutral-border">
      <div className="container-custom section-spacing-mobile">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-text-primary mb-4">
              Comfort Journal
            </h3>
            <p className="text-neutral-text-secondary text-body-small">
              감사를 강요하지 않는 유일한 일기 앱.
              힘든 하루를 견디는 당신에게 진정한 위로를 전달합니다.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-text-primary mb-4">
              링크
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/netsgo0319/journal-landing-page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-text-secondary hover:text-primary transition-colors text-body-small"
                >
                  GitHub 저장소
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-neutral-text-secondary hover:text-primary transition-colors text-body-small"
                >
                  기능 소개
                </a>
              </li>
              <li>
                <a
                  href="#tech-stack"
                  className="text-neutral-text-secondary hover:text-primary transition-colors text-body-small"
                >
                  기술 스택
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-neutral-text-primary mb-4">
              연락처
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/netsgo0319/journal-landing-page"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-text-secondary hover:text-primary transition-colors text-body-small"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="mailto:netsgo0319@naver.com"
                className="flex items-center gap-2 text-neutral-text-secondary hover:text-primary transition-colors text-body-small"
              >
                <Mail size={18} />
                이메일
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-neutral-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-text-muted text-caption text-center md:text-left">
              © {currentYear} Comfort Journal App. All rights reserved.
            </p>
            <p className="text-neutral-text-muted text-caption flex items-center gap-1">
              Made with <Heart size={14} className="text-primary" /> for everyone
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

