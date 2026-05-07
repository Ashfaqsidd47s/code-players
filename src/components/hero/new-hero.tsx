import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Plus,
  ChevronRight,
} from 'lucide-react';

export default function NewHero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.7 },
    }),
  };

  return (
    <section className="relative overflow-hidden  text-foreground   mt-0">
      {/* Soft Light Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-background" />
      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-4 py-8 pt-0 lg:px-6 lg:py-12 ">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
          className=""
        >
          {/* Navbar */}
          

          {/* Bento Grid */}
          <div className="grid gap-4 lg:grid-cols-12 pt-[80px]">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={2}
              className="rounded-[28px] bg-background p-6 shadow-sm lg:col-span-7"
            >
              <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Build products{' '}
                <span className="text-primary">that scale</span>{' '}
                your business
              </h1>

              <div className="mt-3 h-1 w-44 rounded-full bg-primary/30" />

              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                We design premium websites, SaaS platforms, mobile apps and
                multi-vendor marketplaces with world-class UI and fast
                performance.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="rounded-full px-7">
                  Book a Call
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-7"
                >
                  View Portfolio
                </Button>
              </div>
            </motion.div>

            {/* Right Images */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={3}
              className="grid gap-4 sm:grid-cols-2 lg:col-span-5"
            >
              <div className="overflow-hidden rounded-[28px] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200"
                  alt="workspace"
                  className="h-full min-h-[360px] w-full object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-[28px] shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200"
                  alt="coding"
                  className="h-full min-h-[360px] w-full object-cover"
                />
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={4}
              className="grid gap-4 sm:grid-cols-3 lg:col-span-7"
            >
              {[
                ['10K+', 'Happy Clients'],
                ['1K+', 'Projects Delivered'],
                ['10+', 'Years Experience'],
              ].map(([num, label], i) => (
                <div
                  key={i}
                  className={`rounded-[24px] p-5 shadow-sm ${
                    i === 0
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-background'
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-3xl font-bold">{num}</span>
                    <Plus className="h-4 w-4 opacity-70" />
                  </div>
                  <p
                    className={`text-sm ${
                      i === 0
                        ? 'text-primary-foreground/80'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={5}
              className="flex items-end justify-between rounded-[28px] bg-background p-5 shadow-sm lg:col-span-5"
            >
              <div>
                <p className="text-sm text-muted-foreground">
                  Launch your next big idea
                </p>
                <p className="mt-1 text-lg font-semibold">
                  Let’s build together
                </p>
              </div>

              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ChevronRight className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}