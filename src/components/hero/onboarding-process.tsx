
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import {
  ClipboardList,
  PenTool,
  Rocket,
  CheckCircle2,
} from 'lucide-react';

export default function OnboardingProcess() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const steps = [
    {
      title: 'Requirement Gathering',
      desc: 'We understand your business model, goals, features, audience and technical needs.',
      icon: ClipboardList,
    },
    {
      title: 'Planning & Design',
      desc: 'We create roadmap, UI/UX flow, timeline and execution strategy for fast delivery.',
      icon: PenTool,
    },
    {
      title: 'Development & Launch',
      desc: 'We build, test, optimize and deploy your product with complete support.',
      icon: Rocket,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-28 text-foreground"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-background" />
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
            Onboarding Process
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            From Idea To Launch In{' '}
            <span className="text-primary">3 Smooth Steps</span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Our onboarding is fast, clear and designed to move your project from
            discussion to execution without confusion.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative mx-auto max-w-6xl">
          {/* SVG Timeline */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[220px] -translate-x-1/2 lg:block">
            <svg
              viewBox="0 0 220 900"
              className="h-full w-full overflow-visible"
              fill="none"
            >
              {/* Base Path */}
              <path
                d="M110 20 C110 120, 40 180, 110 280 
                   C180 380, 40 450, 110 560
                   C180 680, 80 760, 110 880"
                stroke="rgba(154, 230, 0, 0.1)"
                strokeWidth="6"
                strokeLinecap="round"
              />

              {/* Animated Progress Path */}
              <motion.path
                d="M110 20 C110 120, 40 180, 110 280 
                   C180 380, 40 450, 110 560
                   C180 680, 80 760, 110 880"
                stroke="rgb(154, 230, 0)"
                strokeWidth="6"
                strokeLinecap="round"
                style={{ pathLength }}
              />

              {/* Moving Dot */}
              <motion.circle
                r="10"
                fill="rgb(154, 230, 0)"
                style={{
                  offsetPath:
                    "path('M110 20 C110 120, 40 180, 110 280 C180 380, 40 450, 110 560 C180 680, 80 760, 110 880')",
                  offsetDistance: useTransform(
                    scrollYProgress,
                    [0, 1],
                    ['0%', '100%']
                  ),
                }}
              />
            </svg>
          </div>

          {/* Steps */}
          <div className="space-y-10 lg:space-y-28">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isRight = i % 2 === 1;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7 }}
                  className={`grid items-center gap-8 lg:grid-cols-2 ${
                    isRight ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <div />

                  <Card className="rounded-3xl border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl">
                    <CardContent className="p-7">
                      <div className="mb-5 flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>

                        <div>
                          <p className="text-sm text-muted-foreground">
                            Step 0{i + 1}
                          </p>
                          <h3 className="text-2xl font-semibold">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="leading-7 text-muted-foreground">
                        {step.desc}
                      </p>

                      <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm text-primary">
                        <CheckCircle2 className="h-4 w-4" />
                        Completed Smoothly
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}