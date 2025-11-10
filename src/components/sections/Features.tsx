import { motion } from 'framer-motion';
import { Heart, MessageCircle, Zap, Users, Sparkles } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: '공감하는 AI 동반자',
      description: 'Claude AI 기반의 공감형 대화 인터페이스로, 당신의 감정을 깊이 이해하고 진정한 위로를 제공합니다. 감사를 찾지 못해도 괜찮다고 말해주는, 힘들 때 찾고 싶은 감정 동반자.',
      highlights: [
        '감정을 인정하고 공감',
        '작은 칭찬과 격려',
        '감사를 강요하지 않음',
        '생애주기별 맞춤 응답',
      ],
    },
    {
      icon: Zap,
      title: '부담 없는 입력',
      description: '한 줄만 써도 충분합니다. 빠른 체크인부터 긴 글까지, 당신의 상황에 맞는 입력 방식을 선택하세요.',
      highlights: [
        '빠른 체크인 (10초)',
        '간단 기록 (30초)',
        '자유 쓰기 (제한 없음)',
        '음성 입력 지원',
      ],
    },
    {
      icon: Users,
      title: '생애주기별 맞춤 경험',
      description: '사회 초년생, 취준생, 워킹맘, 빈둥지 부모... 당신의 생애주기에 맞는 질문과 응답을 제공합니다.',
      highlights: [
        '온보딩에서 상황 파악',
        '맥락 기반 질문',
        '상황별 맞춤 응답',
        '프로필 업데이트 가능',
      ],
    },
    {
      icon: Sparkles,
      title: '칭찬 시스템',
      description: '앱을 연 것, 한 줄 쓴 것, 감정을 선택한 것... 모든 시도를 칭찬하고 인정합니다.',
      highlights: [
        '앱 오픈 칭찬',
        '입력 시도 칭찬',
        '감정 인정 칭찬',
        '며칠 못 써도 환영',
      ],
    },
    {
      icon: MessageCircle,
      title: '유연한 감사 찾기',
      description: '감사를 찾고 싶을 때만 찾으세요. 없어도 괜찮다고 말해주는, 유연한 감사 찾기 시스템.',
      highlights: [
        '선택적 감사 찾기',
        '작은 것도 감사로 인정',
        '과거 기록 재발견',
        '감사 패턴 분석',
      ],
    },
  ];

  return (
    <section id="features" className="section-spacing bg-neutral-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-section-title font-bold text-neutral-text-primary mb-4">
            당신을 이해하는 기능들
          </h2>
          <p className="text-body-large text-neutral-text-secondary max-w-2xl mx-auto">
            힘든 하루를 견디는 당신을 위한 특별한 기능들
          </p>
        </motion.div>

        <div className="space-y-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center`}
              >
                {/* Icon & Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-primary-light/20 rounded-card flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-text-primary">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-body-large text-neutral-text-secondary mb-6">
                    {feature.description}
                  </p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {feature.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-body-small text-neutral-text-secondary"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Placeholder for Image/Illustration */}
                <div className="flex-1 bg-neutral-surface rounded-card p-8 border border-neutral-border min-h-[300px] flex items-center justify-center">
                  <p className="text-neutral-text-muted text-body-small text-center">
                    {feature.title} 이미지
                    <br />
                    (스크린샷 또는 일러스트)
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;


