import { motion } from 'framer-motion';
import { Code2, Database, Cpu, Globe } from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      icon: Code2,
      title: 'Frontend',
      technologies: ['React 18', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      icon: Cpu,
      title: 'Backend',
      technologies: ['Node.js', 'Express', 'TypeScript'],
    },
    {
      icon: Database,
      title: 'Database',
      technologies: ['PostgreSQL', 'Neon', 'Drizzle ORM'],
    },
    {
      icon: Globe,
      title: 'AI & Infrastructure',
      technologies: ['Anthropic Claude API', 'Vercel', 'GitHub Pages'],
    },
  ];

  return (
    <section id="tech-stack" className="section-spacing bg-neutral-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-section-title font-bold text-neutral-text-primary mb-4">
            견고한 기술로 만든 안전한 공간
          </h2>
          <p className="text-body-large text-neutral-text-secondary max-w-2xl mx-auto">
            현대적이고 안정적인 기술 스택으로 구현된 프로젝트
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-surface p-6 rounded-card border border-neutral-border card-hover"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-light/20 rounded-card flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-text-primary">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-neutral-background text-body-small text-neutral-text-secondary rounded-button border border-neutral-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Architecture Diagram Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-neutral-surface p-8 rounded-card border border-neutral-border"
        >
          <h3 className="text-xl font-bold text-neutral-text-primary mb-4 text-center">
            아키텍처
          </h3>
          <div className="bg-neutral-background rounded-card p-8 min-h-[200px] flex items-center justify-center">
            <p className="text-neutral-text-muted text-body-small text-center">
              아키텍처 다이어그램
              <br />
              (이미지 또는 다이어그램)
            </p>
          </div>
        </motion.div>

        {/* Security & Privacy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-body text-neutral-text-secondary">
            데이터 암호화, 세션 관리, 프라이버시 우선 설계로
            <br className="hidden md:block" />
            당신의 데이터를 안전하게 보호합니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;


