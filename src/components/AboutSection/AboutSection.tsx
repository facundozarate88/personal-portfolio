import { FC } from 'react';
import { CheckboxIcon } from '@radix-ui/react-icons';
import useYearsOfExperience from '@/hooks/useYearsOfExperience';
import { skills } from './constants';

const AboutSection: FC = () => {
  const yearsOfExperience = useYearsOfExperience();

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-10"
    >
      <div className="container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
          <span className="text-primary mr-4">01.</span>
          About Me
          <div className="h-px bg-border flex-grow ml-6"></div>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-6 mb-4 md:mb-0">
            <p className="text-muted-foreground">
              Hello! I'm Facundo, a senior frontend software engineer with over {yearsOfExperience} years of experience building
              exceptional digital experiences. I enjoy creating things that live on the internet,
              whether that be websites, applications, or anything in between.
            </p>

            <p className="text-muted-foreground">
              I'm passionate about writing clean, efficient code and keeping up with the latest technologies
              and best practices in frontend development.
            </p>

            <p className="text-muted-foreground">
              Throughout my career, I've had the opportunity to collaborate within multidisciplinary teams, particularly in large-scale company environments.
              I truly enjoy working alongside designers, backend developers, product managers, and other stakeholders to achieve shared goals.
              Believing strongly in teamwork and bringing a solid technical focus, I aim to deliver high-quality code while also supporting my peers.
              I also find real satisfaction in sharing knowledge and mentoring colleagues as they develop their skills and work towards their professional aspirations.
            </p>

          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">Skills & Technologies</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center text-muted-foreground">
                  <CheckboxIcon className="flex-shrink-0 h-4 w-4 mr-2 text-primary" />
                  <span className="text-sm">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
