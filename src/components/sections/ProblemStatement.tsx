import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const ProblemStatement = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: '부정적 감정 직면의 부담',
      description: '쓰면 더 우울해진다. 감사 찾기가 위선처럼 느껴짐',
    },
    {
      icon: AlertCircle,
      title: '완벽주의 압박',
      description: '제대로 써야 한다는 부담. 매일 써야 한다는 압박감',
    },
    {
      icon: AlertCircle,
      title: '즉각적 보상 부족',
      description: '쓰고 나서 뭐가 달라지나? 기록만 하고 끝나는 공허함',
    },
    {
      icon: AlertCircle,
      title: '외로움',
      description: '혼자만의 기록이라 공허하다. 공감받지 못하는 느낌',
    },
    {
      icon: AlertCircle,
      title: '중단 후 죄책감',
      description: '하루 빠지면 포기하게 된다. 연속 기록에 대한 압박',
    },
  ];

  const difference = {
    icon: CheckCircle2,
    title: '우리는 다릅니다',
    description: '감사를 강요하지 않고, 있는 그대로의 감정을 받아들이며, 당신이 여기 온 것만으로도 충분하다고 말합니다.',
  };

  return (
    <section id="problem" className="section-spacing bg-neutral-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-section-title font-bold text-neutral-text-primary mb-4">
            기존 일기 앱의 한계
          </h2>
          <p className="text-body-large text-neutral-text-secondary max-w-2xl mx-auto">
            많은 사람들이 일기 앱을 시작하지만 지속하지 못하는 이유
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-neutral-background p-6 rounded-card border border-neutral-border card-hover"
              >
                <Icon className="w-8 h-8 text-accent-error mb-4" />
                <h3 className="text-lg font-semibold text-neutral-text-primary mb-2">
                  {problem.title}
                </h3>
                <p className="text-body-small text-neutral-text-secondary">
                  {problem.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Difference Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary-light/20 to-secondary-light/20 p-8 md:p-12 rounded-card border-2 border-primary/30"
        >
          <div className="max-w-3xl mx-auto text-center">
            <difference.icon className="w-12 h-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-text-primary mb-4">
              {difference.title}
            </h3>
            <p className="text-body-large text-neutral-text-secondary">
              {difference.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemStatement;


