import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What makes Alien Dawn different from other platformers?',
      answer: 'Alien Dawn features compelling characters with morally gray aspects, diverse backstories, and unique personalities that directly affect gameplay. Unlike traditional platformers, your choices shape the narrative and character relationships, leading to multiple unique outcomes.',
    },
    {
      question: 'Is this game suitable for all ages?',
      answer: 'Alien Dawn is a realistic, modern-day platformer targeted at adults. The game explores mature themes including moral dilemmas, complex character relationships, and the consequences of difficult choices.',
    },
    {
      question: 'How do moral choices affect the game?',
      answer: 'Your decisions will significantly impact the narrative and character relationships. Characters remember your actions and respond accordingly, opening different story paths and gameplay opportunities. Some choices have immediate effects, while others create consequences that unfold throughout your journey.',
    },
    {
      question: 'What platforms will Alien Dawn be available on?',
      answer: 'Platform availability will be announced closer to launch. We\'re committed to bringing Alien Dawn to as many players as possible while ensuring optimal performance on each platform.',
    },
    {
      question: 'Can I play with friends?',
      answer: 'Alien Dawn is primarily a single-player narrative experience focused on character development and moral choices. However, we\'re exploring additional modes that could enhance the experience for multiple players.',
    },
    {
      question: 'How long is the game?',
      answer: 'The main story takes approximately 12-15 hours to complete. However, with multiple branching paths, character storylines, and different endings based on your choices, subsequent playthroughs will reveal new content and perspectives.',
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-balance">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Everything you need to know about Alien Dawn
          </p>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
