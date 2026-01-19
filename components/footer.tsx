import React from 'react';
import { Twitter, Github, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-3">Alien Dawn</h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
              A realistic, modern-day platformer featuring compelling characters with morally gray aspects. Experience diverse backstories and unique personalities that affect gameplay.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Game</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Characters</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Story</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-3">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Discord</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Press Kit</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alien Dawn. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Discord">
              <MessageCircle className="h-5 w-5" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
