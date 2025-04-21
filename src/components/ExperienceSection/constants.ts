export interface Job {
  company: string;
  logo: string;
  website: string;
  title: string;
  date: string;
  responsibilities: string[];
  skills?: string[];
}

/**
 *    
 */

export const jobs: Job[] = [
  {
    company: 'eDreams ODIGEO',
    website: 'https://www.edreams.com',
    logo: '/images/edreamsodigeo_logo.png',
    title: 'Senior Frontend Software Engineer',
    date: 'May 2021 - Present',
    responsibilities: [
      'As a key contributor across multidisciplinary teams within eDreams\' pioneering Prime subscription program, I developed and enhanced features for the core platform, managing diverse scopes due to complex module integrations.',
      'Furthermore, I contributed significantly to the migration from a legacy Maven monolith (hosting Java backend and Backbone/Handlebars frontend) to a modern, module-oriented React platform.',
      'I led the end-to-end development of a business-critical Single Page Application (SPA) module in React. This module handles user account and Prime subscription information and serves as the crucial entry point for the cancellation funnel. It was architected to also facilitate streamlined page migrations by other teams. Following the platform\'s migration to React, which included this SPA, the business achieved a significant 30% reduction in churn and has seen ongoing improvements in member retention rates.',
      'Beyond core development, I facilitated the adoption of SonarQube as a standard code quality tool across teams in our area. This involved communicating effectively with different teams about its advantages and presenting a comprehensive workshop to the entire area covering the tool\'s benefits, practical usage, integration details, and answering questions to ensure smooth onboarding. This successful effort led to its integration with Bitbucket, providing inline feedback and resulting in improved code quality and a reduction in bugs across projects.',
      'My role also involves mentoring new hires, conducting technical interviews, and actively participating in the internal Frontend Guild to resolve technical debt and propose architectural improvements.',
      'We operate using Agile/LEAN methodologies (Jira Kanban) with CI/CD pipelines via Jenkins and Bitbucket.'
    ],
    skills: [
      'Frontend: React, TypeScript, JavaScript, Node.js, GraphQL, Storybook',
      'Legacy: Java, Backbone.js, Handlebars, jQuery, Lodash',
      'Backend Interaction: Java (Interfaced with Java backend services/APIs), GraphQL, REST APIs',
      'State Management: React Query, Context API',
      'Testing & Quality: React Testing Library, Selenium & Gherkin/Cucumber (E2E), SonarQube',
      'Build/Tooling: Webpack',
      'DevOps/Workflow: Git, Bitbucket, Jenkins (CI/CD), Jira, Agile/LEAN'
    ],
  },
  {
    company: 'Despegar.com',
    website: 'https://www.despegar.com.ar',
    logo: '/images/despegarcom_logo.png',
    title: 'Frontend Software Engineer',
    date: 'December 2018 - May 2021',
    responsibilities: [
      'As part of a multidisciplinary team at Despegar.com, I focused on maintaining and evolving the main website using Agile methodologies (Sprints, Jira Kanban) and CI/CD (Jenkins/GitHub).',
      'I actively contributed to modernizing the platform through two significant projects: a complete visual rebranding and the complex migration of the legacy frontend stack (Backbone.js, Mustache) to Angular 9, moving away from the original Scala monolith backend architecture where applicable.'
    ],
    skills: [
      'Modern Frontend: Angular 9+, TypeScript, JavaScript, HTML5, CSS3, StencilJS, Storybook',
      'Legacy Frontend: Backbone.js, Mustache.js, jQuery',
      'Backend/API Interaction: Node.js, Express.js, Scala APIs (REST/SOAP)',
      'Testing: Jasmine/Karma (Unit), Cypress/Selenium (E2E)',
      'Tools & Workflow: Git, GitHub, Jenkins, Jira, Webpack, Grunt'
    ]
  },
  {
    company: 'Oracle',
    website: 'https://www.oracle.com/ar',
    logo: '/images/oracle_logo.png',
    title: 'Staff Consultant',
    date: 'January 2017 - Agust 2018',
    responsibilities: [
      'As a consultant in Oracle\'s CX (Customer Experience) area, I specialized in development on key applications such as CPQ Cloud, Sales Cloud, and Siebel.',
      'Collaborated directly with clients from the design phase through implementation, creating multi-platform and responsive solutions tailored to their specific business models.',
      'My technical responsibilities included full-stack web development and executing integrations between diverse web applications via REST & SOAP Web Services.',
    ],
    skills: [
      'Frontend: HTML5, CSS3, JavaScript, jQuery, XML, XSLT, BML',
      'Backend/API Interaction: SQL, REST/SOAP Web Services',
      'Oracle Applications: CPQ Cloud, Sales Cloud, Siebel',
    ]
  },
  {
    company: 'CeSPI',
    website: 'https://www.cespi.unlp.edu.ar',
    logo: '/images/cespi_logo.png',
    title: 'Network Security Auditor',
    date: 'July 2015 - January 2017',
    responsibilities: [
      'Conducted network audits focused on regulatory compliance and security vulnerabilities within the gambling industry. This involved performing on-site evaluations in client data centers, utilizing specialized software for vulnerability detection alongside thorough manual inspections.',
      'Ensured adherence to strict government mandates, reporting compliance status and any discovered irregularities directly to regulatory authorities. Authored comprehensive reports detailing audit findings, methodologies, and results',
    ],
    skills: [
      'Network Security: Vulnerability Assessment, Regulatory Compliance',
      'Tools: Nessus, Nmap, Wireshark',
      'Reporting: Technical Documentation, Compliance Reporting'
    ]
  }
];