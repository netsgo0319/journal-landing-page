import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 via-transparent to-secondary-light/10" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-hero font-bold text-neutral-text-primary mb-6 leading-tight"
          >
            감사를 강요하지 않는
            <br />
            <span className="text-gradient">유일한 일기 앱</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-subtitle text-neutral-text-secondary mb-8 leading-relaxed px-4"
          >
            힘든 하루를 견디는 당신에게 진정한 위로를 전달하는 AI 동반자
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-body md:text-body-large text-neutral-text-secondary mb-12 max-w-2xl mx-auto px-4"
          >
            기존 일기 앱들은 감사를 찾으라고 요구합니다.
            하지만 우리는 다릅니다.
            당신이 여기 온 것만으로도 충분하다고 말합니다.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="https://github.com/netsgo0319/journal-landing-page"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary text-white px-8 py-4 rounded-button hover:bg-primary-dark transition-all duration-300 font-medium text-body flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
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
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-neutral-text-muted rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-neutral-text-muted rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

