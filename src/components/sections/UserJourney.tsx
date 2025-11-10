import { motion } from 'framer-motion';
import { ArrowRight, MessageSquare, Heart, Sparkles } from 'lucide-react';

const UserJourney = () => {
  const steps = [
    {
      number: '1',
      title: '앱 열기',
      description: '"반가워, [이름]. 오늘 여기까지 오느라 수고했어"',
      detail: '따뜻한 환영 메시지와 빠른 체크인 옵션',
      icon: Heart,
    },
    {
      number: '2',
      title: '감정 토해내기',
      description: '사용자: "오늘도 실패했다"\nAI: "정말 힘들었겠다. 그래도 포기하지 않은 너, 대단해"',
      detail: '부정적 감정도 받아들이고 진정한 공감과 위로 제공',
      icon: MessageSquare,
    },
    {
      number: '3',
      title: '선택적 감사 찾기',
      description: 'AI: "혹시 오늘 하루 중에 괜찮았던 순간이 있었어?"\n사용자: "없어"\nAI: "괜찮아. 오늘은 네가 여기 온 것만으로도 충분해"',
      detail: '부드러운 질문과 강요하지 않는 접근',
      icon: Sparkles,
    },
    {
      number: '4',
      title: '칭찬과 격려',
      description: '"오늘도 수고했어. 내일 또 보자"',
      detail: '작은 칭찬과 다음을 위한 격려',
      icon: Heart,
    },
  ];

  return (
    <section id="user-journey" className="section-spacing bg-neutral-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-section-title font-bold text-neutral-text-primary mb-4">
            당신의 하루, 이렇게 기록하세요
          </h2>
          <p className="text-body-large text-neutral-text-secondary max-w-2xl mx-auto">
            간단하고 자연스러운 사용자 여정
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } items-center gap-8 relative`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'md:text-right' : 'md:text-left'} md:w-1/2`}>
                    <div className="bg-neutral-background p-6 md:p-8 rounded-card border border-neutral-border card-hover">
                      <div className="flex items-center gap-4 mb-4 md:justify-start">
                        {!isEven && (
                          <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                        )}
                        <div>
                          <span className="text-sm font-semibold text-primary mb-1 block">
                            STEP {step.number}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold text-neutral-text-primary">
                            {step.title}
                          </h3>
                        </div>
                        {isEven && (
                          <div className="w-12 h-12 bg-primary-light/20 rounded-full flex items-center justify-center ml-auto">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                        )}
                      </div>
                      <p className="text-body text-neutral-text-secondary mb-3 whitespace-pre-line">
                        {step.description}
                      </p>
                      <p className="text-body-small text-neutral-text-muted">
                        {step.detail}
                      </p>
                    </div>
                  </div>

                  {/* Step Number Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl z-10 hidden md:flex">
                    {step.number}
                  </div>

                  {/* Spacer for mobile */}
                  <div className="md:hidden w-full" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserJourney;

