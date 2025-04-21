import { FC } from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Button from '@/components/ui/Button';
import useYearsOfExperience from '@/hooks/useYearsOfExperience';

const HeroSection: FC = () => {
  const yearsOfExperience = useYearsOfExperience();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-20 pb-10 px-6 md:px-10"
    >
      <div className="container max-w-5xl mx-auto">
        <div className="opacity-0 animate-fade-in-slow" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-primary font-medium mb-2">Hi, my name is</h2>
        </div>

        <div className="opacity-0 animate-fade-in-slow" style={{ animationDelay: '0.4s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Facundo Zarate Uguet
          </h1>
        </div>

        <div className="opacity-0 animate-fade-in-slow" style={{ animationDelay: '0.6s' }}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6">
            I build exceptional web experiences.
          </h1>
        </div>

        <div className="opacity-0 animate-fade-in-slow max-w-xl" style={{ animationDelay: '0.8s' }}>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            I'm a Senior frontend engineer specializing in building exceptional digital experiences.
            I bring over {yearsOfExperience} years of experience working within large-scale environments.
          </p>
        </div>

        <div className="opacity-0 animate-fade-in-slow" style={{ animationDelay: '1s' }}>
          <Button asChild size="lg" className="group">
            <a href="#about">
              More about me
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
};

export default HeroSection;