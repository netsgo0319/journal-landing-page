import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: '소개', href: '#features' },
    { label: '기능', href: '#features' },
    { label: '기술 스택', href: '#tech-stack' },
    { label: '데모', href: '#screenshots' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-neutral-surface shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-2xl font-bold text-primary-dark hover:text-primary transition-colors"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Comfort Journal
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-neutral-text-primary hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://github.com/netsgo0319/journal-landing-page"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-6 py-2 rounded-button hover:bg-primary-dark transition-colors font-medium"
            >
              GitHub
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-text-primary hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 토글"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neutral-border pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-neutral-text-primary hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://github.com/netsgo0319/journal-landing-page"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-6 py-2 rounded-button hover:bg-primary-dark transition-colors font-medium text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

