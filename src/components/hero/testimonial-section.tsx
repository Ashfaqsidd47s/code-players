import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    company: 'Elumity',
    name: 'Andreas Raabe',
    role: 'Founder',
    text: 'Code Players delivered outstanding design quality with exceptional attention to detail. Their communication and execution were world-class.',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300',
  },
  {
    company: 'Reap',
    name: 'John Carter',
    role: 'Product Lead',
    text: 'The team transformed our idea into a premium digital product. Fast delivery, clean code, and an amazing experience throughout.',
    avatar:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=300',
  },
  {
    company: 'Nova Labs',
    name: 'Sarah Lee',
    role: 'CEO',
    text: 'From UI/UX to development, everything felt intentional and polished. We saw better conversions right after launch.',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300',
  },
  {
    company: 'Pixelora',
    name: 'David Kim',
    role: 'Marketing Head',
    text: 'Beautiful UI, fast performance, and strategic execution. Our brand now feels premium and future-ready.',
    avatar:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=300',
  },
];

export default function TestimonialsSection() {
  const duplicated = [...testimonials, ...testimonials];
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  /* pause when user interacts */
  useEffect(() => {
    const resume = setTimeout(() => {}, 0);
    return () => clearTimeout(resume);
  }, [paused]);

  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-size-[72px_72px] opacity-30" />

      <div className="container relative mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Testimonials
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Trusted by modern brands
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            Swipe manually or let it auto-slide infinitely.
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-linear-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-linear-to-l from-background to-transparent" />

          <motion.div
            ref={trackRef}
            drag="x"
            dragConstraints={{ left: -1200, right: 0 }}
            onDragStart={() => setPaused(true)}
            onDragEnd={() => {
              setTimeout(() => setPaused(false), 2500);
            }}
            whileTap={{ cursor: 'grabbing' }}
            animate={
              paused
                ? {}
                : {
                    x: ['0%', '-50%'],
                  }
            }
            transition={
              paused
                ? {}
                : {
                    duration: 28,
                    repeat: Infinity,
                    ease: 'linear',
                  }
            }
            className="flex w-max cursor-grab gap-6 active:cursor-grabbing"
          >
            {duplicated.map((item, i) => (
              <div
                key={i}
                className="w-[360px] shrink-0 rounded-[28px] border border-border bg-card p-7 shadow-xl"
              >
                {/* Top */}
                <div className="mb-6 flex items-center justify-between">
                  <p className="text-xl font-bold">{item.company}</p>

                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>

                <Quote className="mb-4 h-6 w-6 text-primary" />

                <p className="min-h-[130px] text-[15px] leading-7 text-muted-foreground">
                  {item.text}
                </p>

                {/* Bottom */}
                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}