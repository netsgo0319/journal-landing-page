import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Monitor } from 'lucide-react';
import { useState } from 'react';

const Screenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = [
    {
      title: '홈 화면',
      description: '환영 메시지와 빠른 체크인 옵션',
    },
    {
      title: '대화 화면',
      description: '사용자 메시지와 AI 응답, 감정 태그',
    },
    {
      title: '타임라인',
      description: '과거 기록, 감정 필터, 캘린더 뷰',
    },
    {
      title: '인사이트',
      description: '사용 통계, 감정 변화, 성장 시각화',
    },
    {
      title: '설정',
      description: '프로필 편집, 생애주기 설정, 알림 설정',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="screenshots" className="section-spacing bg-neutral-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-section-title font-bold text-neutral-text-primary mb-4">
            실제 앱을 만나보세요
          </h2>
          <p className="text-body-large text-neutral-text-secondary max-w-2xl mx-auto">
            주요 화면을 살펴보고 기능을 확인해보세요
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Screenshot Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-background rounded-card p-8 border border-neutral-border mb-6"
            >
            <div className="aspect-video bg-neutral-surface rounded-card flex items-center justify-center mb-4">
              <div className="text-center">
                <Monitor className="w-16 h-16 text-neutral-text-muted mx-auto mb-4" />
                <p className="text-neutral-text-muted text-body-small">
                  {screenshots[currentIndex].title}
                </p>
                <p className="text-neutral-text-muted text-caption mt-2">
                  (스크린샷 이미지)
                </p>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-neutral-text-primary mb-2">
                {screenshots[currentIndex].title}
              </h3>
              <p className="text-body-small text-neutral-text-secondary">
                {screenshots[currentIndex].description}
              </p>
            </div>
          </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-neutral-background border border-neutral-border hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="이전 스크린샷"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary w-8'
                      : 'bg-neutral-border hover:bg-primary-light'
                  }`}
                  aria-label={`스크린샷 ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-neutral-background border border-neutral-border hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
              aria-label="다음 스크린샷"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Thumbnail Grid (Optional) */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8 max-w-4xl mx-auto">
          {screenshots.map((screenshot, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`aspect-video bg-neutral-background rounded-card border-2 transition-all duration-300 ${
                index === currentIndex
                  ? 'border-primary shadow-lg'
                  : 'border-neutral-border hover:border-primary-light'
              }`}
            >
              <div className="p-2 text-center">
                <p className="text-caption text-neutral-text-muted">{screenshot.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Screenshots;

