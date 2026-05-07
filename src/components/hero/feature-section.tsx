'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  LayoutDashboard,
  Smartphone,
  Globe,
  Store,
  Truck,
  Sparkles,
} from 'lucide-react';

export default function FeaturesSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.7,
      },
    }),
  };

  const features = [
    {
      title: 'Admin Panel',
      desc: 'Powerful dashboard to manage vendors, users, orders, analytics, coupons and complete platform operations.',
      icon: LayoutDashboard,
    },
    {
      title: 'Customer App',
      desc: 'Smooth mobile shopping experience with wishlist, live tracking, secure payments and instant checkout.',
      icon: Smartphone,
    },
    {
      title: 'Website',
      desc: 'High-converting modern website built for speed, SEO, product discovery and seamless browsing.',
      icon: Globe,
    },
    {
      title: 'Vendor App',
      desc: 'Dedicated seller app for product uploads, inventory management, order handling and reports.',
      icon: Store,
    },
    {
      title: 'Delivery App',
      desc: 'Real-time delivery partner app with route tracking, order status updates and earnings dashboard.',
      icon: Truck,
    },
  ];

  return (
    <section id='feature-section' className="relative overflow-hidden bg-background py-24 text-foreground">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-background to-background" />
      <div className="absolute top-10 left-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Complete Multi Vendor Ecosystem
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={2}
            className="text-4xl font-bold tracking-tight sm:text-5xl"
          >
            Everything You Need To Run A{' '}
            <span className="text-primary">Modern Marketplace</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={3}
            className="mt-5 text-lg text-muted-foreground"
          >
            We build complete scalable solutions including admin controls,
            customer apps, vendor systems, delivery tools and web platforms.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={index + 1}
                whileHover={{ y: -8 }}
              >
                <Card className="group h-full rounded-3xl border-white/10 bg-white/5 backdrop-blur-2xl transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.07]">
                  <CardContent className="p-6">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-background/60">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <h3 className="text-xl font-semibold">{item.title}</h3>

                    <p className="mt-3 leading-7 text-muted-foreground">
                      {item.desc}
                    </p>

                    <div className="mt-6 flex items-center text-sm font-medium text-primary">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={7}
          className="mt-16 text-center"
        >
          <Button size="lg" className="h-12 px-8 text-base">
            Build Your Platform
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}