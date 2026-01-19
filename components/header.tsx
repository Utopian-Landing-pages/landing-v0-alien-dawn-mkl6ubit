import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold tracking-tight">Alien Dawn</h1>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li><a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Features</a></li>
              <li><a href="#faq" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">FAQ</a></li>
              <li><a href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Contact</a></li>
            </ul>
          </nav>
          <Button size="sm">Play Now</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
