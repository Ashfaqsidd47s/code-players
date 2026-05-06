import  { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem } from '@/components/ui/menubar';
import {  MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Menu from './menu/menu';

export default function CodePlayersNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur-2xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 font-bold text-primary"><img src="/logo.png" alt="" /></div>
          <div>
            <p className="text-lg font-semibold">Code Players</p>
            <p className="text-xs text-muted-foreground">Agency Studio</p>
          </div>
        </div>

        <div className="hidden lg:block">
          <Menubar className="border-white/10 bg-white/5 backdrop-blur-xl">
            <MenubarMenu>
              <MenubarTrigger>Features</MenubarTrigger>
              <MenubarContent>
                <MenubarItem  onClick={() => document.getElementById('feature-section')?.scrollIntoView({ behavior: 'smooth' })}>Admin Panel</MenubarItem>
                <MenubarItem onClick={() => document.getElementById('feature-section')?.scrollIntoView({ behavior: 'smooth' })}>Vendor Dashboard</MenubarItem>
                <MenubarItem onClick={() => document.getElementById('feature-section')?.scrollIntoView({ behavior: 'smooth' })}>Customer App</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu><MenubarTrigger>Industries</MenubarTrigger></MenubarMenu>
            <MenubarMenu><MenubarTrigger>Pricing</MenubarTrigger></MenubarMenu>
            <MenubarMenu><MenubarTrigger>Services</MenubarTrigger></MenubarMenu>
            <MenubarMenu><MenubarTrigger>Demo</MenubarTrigger></MenubarMenu>
            <MenubarMenu><MenubarTrigger>Resources</MenubarTrigger></MenubarMenu>
          </Menubar>
        </div>

        <div className="hidden lg:flex items-center gap-3">
            <Menu />
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden rounded-lg border border-white/10 p-2 bg-white/5">
          {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden border-t border-white/10 bg-background/95 px-6 py-4 space-y-3"
          >
            {['Features','Industries','Pricing','Services','Demo','Resources'].map((item) => (
              <p key={item} className="text-sm font-medium">{item}</p>
            ))}
            <div className="flex gap-2 pt-2">
              <Button className="w-full">Buy Now</Button>
              <Button variant="outline" className="w-full">Contact</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
