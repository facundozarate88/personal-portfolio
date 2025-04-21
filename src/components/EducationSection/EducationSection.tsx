import { FC } from 'react';

const EducationSection: FC = () => {
  return (
    <section id="education" className="py-20 px-6 md:px-10">
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
          <span className="text-primary mr-4">03.</span>
          Education
          <div className="h-px bg-border flex-grow ml-6"></div>
        </h2>
        <div className="flex">
          <a className="mr-3 flex-shrink-0" href="https://unlp.edu.ar/" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/unlp.png"
              alt="Education"
              className="w-12 h-12 object-cover transition-transform duration-300 group-hover:scale-105 rounded-md"
            />
          </a>

          <div className="space-y-6">

            <h3 className="text-xl font-semibold">Bachelor's degree in Computer Science</h3>
            <p className="text-muted-foreground mb-4">National University of La Plata</p>
            <p className="text-muted-foreground mb-4">Acquired a solid foundation in core computer science principles and software development practices through the comprehensive curriculum at UNLP, a leading public university in Argentina.</p>

          </div>
        </div>
      </div>

    </section>
  );
}

export default EducationSection;