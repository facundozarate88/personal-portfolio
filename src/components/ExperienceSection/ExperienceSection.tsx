import { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { jobs } from './constants';

const ExperienceSection: FC = () => (
  <section id="experience" className="py-20 px-6 md:px-10 bg-accent">
    <div className="container max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
        <span className="text-primary mr-4">02.</span>
        Work Experience
        <div className="h-px bg-border flex-grow ml-6"></div>
      </h2>

      <Tabs defaultValue={jobs[0].company} className="w-full">
        <TabsList className="flex flex-col sm:flex-row h-auto sm:h-10 mb-8 bg-transparent space-y-2 sm:space-y-0">
          {jobs.map(({ company }) => (
            <TabsTrigger
              key={company}
              value={company}
              className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
            >
              {company}
            </TabsTrigger>
          ))}
        </TabsList>

        {jobs.map((job) => (
          <TabsContent key={job.company} value={job.company} className="space-y-6 animate-fade-in">
            <div>
              <div className="flex items-center mb-4">
                <a className="mr-3 flex-shrink-0" href={job.website} target="_blank" rel="noopener noreferrer">
                  <img src={job.logo} alt={job.company} className="w-10 h-10 object-cover transition-transform duration-300 group-hover:scale-105 rounded-md" />
                </a>
                <h3 className="text-xl font-semibold">{job.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{job.date}</p>

              <ul className="space-y-4">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span className="text-muted-foreground">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {job.skills && (
              <div>
                <h4 className="text-lg font-semibold mb-4">Skills:</h4>
                <ul className="space-y-5">
                  {job.skills.map((skill, index) => (
                    <li key={index} className="text-muted-foreground">
                      <span className="text-primary mr-2">▹</span>
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  </section>
);

export default ExperienceSection;
