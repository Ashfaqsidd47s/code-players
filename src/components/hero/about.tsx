import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.7,
      },
    }),
  };

  const stats = [
    { value: '10,000+', label: 'Projects Completed' },
    { value: '50+', label: 'Global Clients' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '15+', label: 'Years Experience' },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-background" />
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="rounded-[40px] border border-border/60 bg-card p-8 shadow-xl lg:p-14">
          {/* Top Content */}
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={1}
            >
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                About Us
              </span>

              <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
                We Build Digital Products That Grow Businesses
              </h2>

              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                At Code Players, we believe technology should do more than just
                function — it should create experiences that drive growth,
                engagement, and trust.
              </p>

              <p className="mt-4 text-lg leading-8 text-muted-foreground">
                From SaaS platforms to eCommerce marketplaces and mobile apps,
                we combine strategy, design, and development to launch products
                users love.
              </p>

              <Button className="mt-8 rounded-full px-7 py-6 text-base">
                More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Right Images */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={2}
              className="relative mx-auto h-[420px] w-full max-w-[520px]"
            >
              {/* Main Image */}
              <div className="absolute right-0 top-0 h-[320px] w-[420px] overflow-hidden rounded-[28px] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200"
                  alt="team working"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating Image */}
              <div className="absolute bottom-4 right-8 rotate-12 overflow-hidden rounded-[28px] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000"
                  alt="developers"
                  className="h-[220px] w-[260px] object-cover"
                />
              </div>

              {/* Decorative Dashed Line */}
              <div className="absolute -left-20 top-12 hidden h-[320px] w-[320px] rounded-full border border-dashed border-primary/20 lg:block" />
            </motion.div>
          </div>

          {/* Bottom Stats */}
          <div className="mt-20 grid gap-8 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i + 3}
                className="text-center lg:text-left"
              >
                <h3 className="text-4xl font-bold tracking-tight text-foreground">
                  {item.value}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}