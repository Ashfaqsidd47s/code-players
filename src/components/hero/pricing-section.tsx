import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Sparkles, ArrowRight, Zap, Crown } from 'lucide-react';

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  icon: React.ElementType;
};

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$1,499',
    period: '/ project',
    description: 'Perfect for landing pages and small business sites that need to launch fast.',
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO setup',
      '2 rounds of revisions',
      '2 weeks delivery',
    ],
    cta: 'Get Started',
    icon: Zap,
  },
  {
    name: 'Growth',
    price: '$1232',
    period: '/ project',
    description: 'For growing brands that need a scalable web platform with custom features.',
    features: [
      'Up to 15 pages',
      'Custom UI/UX design',
      'CMS integration',
      'Advanced SEO & analytics',
      'Unlimited revisions',
      '4–6 weeks delivery',
    ],
    cta: 'Start Your Project',
    highlighted: true,
    icon: Sparkles,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored',
    description: 'Multi-vendor marketplaces, mobile apps, and complex platforms built to scale.',
    features: [
      'Multi-vendor eCommerce',
      'iOS & Android apps',
      'Dedicated team & PM',
      'API & 3rd party integrations',
      'Priority support',
      'SLA & maintenance',
    ],
    cta: 'Talk to Us',
    icon: Crown,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7 },
  }),
};

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Decorative glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            Pricing Plans
          </div>
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Simple, scalable pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose a plan that fits your stage. From quick launches to full-scale
            multi-vendor platforms — we've got you covered.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                custom={i + 1}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Card
                  className={`relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                    plan.highlighted
                      ? 'border-primary/60 bg-card shadow-2xl shadow-primary/20 ring-1 ring-primary/40'
                      : 'border-border/60 bg-card/60 backdrop-blur hover:border-primary/40'
                  }`}
                >
                  {plan.highlighted && (
                    <>
                      <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/0 via-primary to-primary/0" />
                      <div className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                        Most Popular
                      </div>
                    </>
                  )}

                  <CardContent className="flex h-full flex-col p-8">
                    <div
                      className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                        plan.highlighted
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-primary/10 text-primary'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground">
                      {plan.name}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {plan.description}
                    </p>

                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-5xl font-bold tracking-tight text-foreground">
                        {plan.price}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {plan.period}
                      </span>
                    </div>

                    <ul className="mt-8 space-y-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm text-foreground/90"
                        >
                          <span
                            className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full ${
                              plan.highlighted
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-primary/15 text-primary'
                            }`}
                          >
                            <Check className="h-3 w-3" strokeWidth={3} />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-10">
                      <Button
                        size="lg"
                        variant={plan.highlighted ? 'default' : 'outline'}
                        className="group w-full"
                      >
                        {plan.cta}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Footnote */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          Need something custom? <span className="text-primary font-medium cursor-pointer hover:underline">Let's chat</span> — we tailor every engagement.
        </motion.p>
      </div>
    </section>
  );
}
