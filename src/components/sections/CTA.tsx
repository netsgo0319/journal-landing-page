import { motion } from 'framer-motion';
import { ArrowRight, Github, Heart } from 'lucide-react';

const CTA = () => {
  return (
    <section className="section-spacing bg-gradient-to-br from-primary-light/20 via-transparent to-secondary-light/20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-section-title font-bold text-neutral-text-primary mb-6">
            지금 시작하세요
          </h2>
          <p className="text-body-large text-neutral-text-secondary mb-8">
            프로젝트를 확인하고, 기여하고, 함께 만들어가세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://github.com/netsgo0319/journal-landing-page"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary text-white px-8 py-4 rounded-button hover:bg-primary-dark transition-all duration-300 font-medium text-body flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Github size={20} />
              GitHub에서 보기
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="group border-2 border-primary text-primary px-8 py-4 rounded-button hover:bg-primary hover:text-white transition-all duration-300 font-medium text-body flex items-center gap-2"
            >
              기능 알아보기
              <Heart size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 text-body-small text-neutral-text-muted"
          >
            오픈소스 프로젝트입니다. 기여를 환영합니다.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

