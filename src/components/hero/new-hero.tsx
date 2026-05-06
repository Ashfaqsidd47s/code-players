
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles, ShoppingCart, Smartphone, Globe } from 'lucide-react';

export default function NewHero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i=1) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7 } })
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
      <div className="absolute -top-32 left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-6 py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={1} className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">Premium Digital Product Studio</span>
            </motion.div>

            <motion.h1 initial="hidden" animate="visible" variants={fadeUp} custom={2} className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Build the Future with <span className="text-primary">Code Players</span>
            </motion.h1>

            <motion.p initial="hidden" animate="visible" variants={fadeUp} custom={3} className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              We craft high-performance web & mobile solutions with a sharp focus on multi-vendor eCommerce platforms that scale fast, convert better, and look world-class.
            </motion.p>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={4} className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group h-12 px-6 text-base">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-6 text-base border-white/10 bg-white/5 backdrop-blur-xl">
                View Portfolio
              </Button>
            </motion.div>

            <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={5} className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span>✔ Scalable Architecture</span>
              <span>✔ Modern UI/UX</span>
              <span>✔ Fast Delivery</span>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl" />
            <Card className="relative rounded-3xl border-white/10 bg-white/5 shadow-2xl backdrop-blur-2xl">
              <CardContent className="p-6">
                <div className="grid gap-4">
                  <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
                    <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
                      <div className="flex items-center gap-3">
                        <ShoppingCart className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-medium">Multi Vendor Marketplace</p>
                          <p className="text-sm text-muted-foreground">Advanced seller & admin dashboards</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="grid grid-cols-2 gap-4">
                    <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
                      <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
                        <Smartphone className="mb-3 h-5 w-5 text-primary" />
                        <p className="font-medium">Mobile Apps</p>
                        <p className="text-sm text-muted-foreground">iOS & Android</p>
                      </div>
                    </motion.div>

                    <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 6 }}>
                      <div className="rounded-2xl border border-white/10 bg-background/60 p-5">
                        <Globe className="mb-3 h-5 w-5 text-primary" />
                        <p className="font-medium">Web Platforms</p>
                        <p className="text-sm text-muted-foreground">Fast & SEO ready</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
