import { Button } from '@/components/ui/button';
import {
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUpRight,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-background px-4 pb-6 pt-16 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-[34px] bg-foreground text-background shadow-2xl">
          {/* Soft Glow */}
          <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative z-10 px-6 py-10 sm:px-10 lg:px-14 lg:py-14">
            {/* Top Row */}
            <div className="grid gap-10 lg:grid-cols-2">
              {/* Left */}
              <div>
                <h2 className="text-4xl font-bold tracking-tight text-primary">
                  CODE PLAYERS
                </h2>

                <p className="mt-5 max-w-md text-sm leading-7 text-background/70 sm:text-base">
                  Building modern websites, scalable apps and premium digital
                  experiences for ambitious brands worldwide.
                </p>

                {/* CTA Row */}
                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                  {/* Phone Box */}
                  <div className="flex h-14 min-w-[260px] items-center rounded-2xl bg-background px-5 text-foreground shadow-lg">
                    <Phone className="mr-3 h-4 w-4 text-primary" />
                    <span className="font-medium">+91 98765 43210</span>
                  </div>

                  {/* CTA */}
                  <Button className="h-14 rounded-2xl px-8 text-base font-semibold">
                    Call Now
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Right */}
              <div className="flex flex-col justify-between lg:items-end">
                {/* Nav */}
                <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-background/75">
                  <a href="#" className="transition hover:text-background">
                    Home
                  </a>
                  <a href="#" className="transition hover:text-background">
                    Services
                  </a>
                  <a href="#" className="transition hover:text-background">
                    Projects
                  </a>
                  <a href="#" className="transition hover:text-background">
                    About
                  </a>
                  <a href="#" className="transition hover:text-background">
                    Contact
                  </a>
                </div>

                {/* Email opposite side */}
                <div className="mt-8 flex items-center gap-3 rounded-2xl border border-background/10 px-5 py-4 text-sm text-background/80">
                  <Mail className="h-4 w-4 text-primary" />
                  hello@codeplayers.dev
                </div>

                {/* Social */}
                <div className="mt-8 flex gap-3">
                  {[
                    Instagram,
                    Linkedin,
                    Twitter,
                  ].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-background/5 transition hover:bg-background/10"
                    >
                      <Icon className="h-4 w-4 text-primary" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="my-10 h-px bg-background/10" />

            {/* Bottom */}
            {/* <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <h3 className="text-6xl font-bold tracking-[0.01em] text-background/85 sm:text-7xl lg:text-9xl">
                CODE <span className='text-primary font-bold text-2xl'>PLAYERS</span>
              </h3>

              <div className="flex flex-wrap gap-6 text-sm text-background/60">
                <span>© 2026 Code Players</span>
                <a href="#" className="hover:text-background">
                  Privacy
                </a>
                <a href="#" className="hover:text-background">
                  Terms
                </a>
                <a href="#" className="hover:text-background">
                  Support
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}