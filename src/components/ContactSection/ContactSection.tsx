import { FC } from 'react';
import { LinkedInLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons';
import Button from '@/components/ui/Button';

const ContactSection: FC = () => (
  <section id="contact" className="py-20 px-6 md:px-10 bg-accent">
    <div className="container max-w-5xl mx-auto text-center">
      <div className="inline-block text-primary mb-4">04. What's Next?</div>

      <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>

      <p className="text-muted-foreground max-w-lg mx-auto mb-10">
        Always open to discussing new professional challenges and opportunities. Whether you have a question, an interesting project, or just want to say hello, please don't hesitate to send a message.
        I look forward to hearing from you and will reply as soon as I can!
      </p>

      <Button size="lg" className="mb-12">
        <a href="mailto:facundozarate88@gmail.com">Say Hello</a>
      </Button>

      <div className="flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/facundo-zarate-uguet/?locale=en_US" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedInLogoIcon width={30} height={30} className='hover:text-primary' />
        </a>

        <a href="mailto:facundozarate88@gmail.com" aria-label="Email">
          <EnvelopeClosedIcon width={30} height={30} className='hover:text-primary' />
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
