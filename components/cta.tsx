import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-primary/10 to-primary/5" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Ready to make tough choices?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Dive into a platformer where your decisions matter. Experience a narrative-driven adventure with gameplay that adapts to your moral compass.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Button size="lg" className="gap-2">
              <Rocket className="h-5 w-5" />
              Join the Invasion
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Available soon on multiple platforms
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
