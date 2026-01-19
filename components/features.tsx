import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, AtSign as Alien, Brain, Users, Map, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Morally Gray Characters',
      description: 'Experience characters with complex motivations and difficult choices. Your decisions shape their paths and the world around you.',
    },
    {
      icon: Alien,
      title: 'Alien Invasion',
      description: 'Fight against or alongside alien forces in a modern-day setting. Choose your alliances carefully as tensions rise.',
    },
    {
      icon: Brain,
      title: 'Unique Personalities',
      description: 'Engage with characters whose personalities directly impact gameplay. Each character brings distinct abilities and perspectives.',
    },
    {
      icon: Users,
      title: 'Diverse Backstories',
      description: 'Uncover rich character histories that influence their actions. Learn what drives each character in this chaotic world.',
    },
    {
      icon: Map,
      title: 'Dynamic World',
      description: 'Explore a living, breathing environment that reacts to your choices. Every action has consequences that ripple through the story.',
    },
    {
      icon: Zap,
      title: 'Fast-Paced Action',
      description: 'Master fluid platforming mechanics combined with strategic decision-making. Balance speed with careful consideration.',
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Key Features
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Discover what makes Alien Dawn a unique platforming experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
