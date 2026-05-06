import { motion, type  Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function DesignerHero() {
  // Properly typed variants
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const, // Fixed with 'as const'
      },
    }),
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-6 lg:px-12">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-black font-bold text-xl">D</span>
          </div>
          <span className="font-semibold tracking-wider text-xl">DIGIMON</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-emerald-400 transition-colors">Home</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">About</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Services</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Advisor</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-white/10">
            Sign In
          </Button>
          <Button className="bg-[#22C55E] hover:bg-[#16A34A] text-black font-semibold px-6">
            Sign Up
          </Button>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 pt-16 pb-24 lg:pt-32 lg:pb-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm backdrop-blur-md mb-8"
          >
            <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            PREMIUM DIGITAL STUDIO
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6"
          >
            WE BUILD AND SCALE<br />
            <span className="bg-gradient-to-r from-white via-emerald-300 to-white bg-clip-text text-transparent">
              DIGITAL PRODUCT
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="text-xl md:text-2xl text-white/80 max-w-xl leading-relaxed mb-10"
          >
            Founding successful companies by combining ideas with business expertise, capital and technical execution.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="bg-[#22C55E] hover:bg-[#16A34A] text-black text-lg px-10 h-14 rounded-xl font-semibold group"
            >
              Get Started
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/30 hover:bg-white/10 text-white text-lg px-10 h-14 rounded-xl backdrop-blur-md"
            >
              How it work
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Client Logos */}
      <div className="relative z-10 border-t border-white/10 bg-black/50 backdrop-blur-lg py-6">
        <div className="container mx-auto px-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70">
          <img src="https://www.gobona.com/logo.svg" alt="Gobona" className="h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Square_Inc._logo.svg" alt="Square" className="h-7" />
          <span className="font-semibold text-xl tracking-widest">Martino</span>
          <span className="font-bold text-2xl">Perfius</span>
        </div>
      </div>
    </section>
  );
}