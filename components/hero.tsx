import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary/10),transparent)]" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Compelling characters with morally gray aspects
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground text-pretty">
            Diverse backstories and unique personalities affecting gameplay. Navigate a world where every decision shapes your journey through an alien invasion.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              Learn More <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
