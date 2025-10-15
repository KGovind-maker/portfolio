// Text-based placeholder component for project images
const ProjectPlaceholder = ({ title }) => {
  return (
    <div style={{
      width: '100%',
      height: '200px',
      backgroundColor: '#0a192f',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#64ffda',
      fontSize: '1.2rem',
      textAlign: 'center',
      padding: '1rem',
      border: '1px solid #64ffda',
      borderRadius: '4px'
    }}>
      {title}
    </div>
  );
};

export const projects = [
  {
    title: 'Pruleads – Lead and Campaign Management System',
    description: 'A comprehensive lead management platform for Prudential field agents, featuring real-time data processing, automated campaign workflows, and advanced analytics. Built with microservices architecture for scalability and reliability.',
    image: <ProjectPlaceholder title="Pruleads System" />,
    technologies: ['Java', 'Spring Boot', 'Microservices', 'Kafka', 'AWS', 'SQL', 'Cassandra', 'JUnit', 'Mockito', 'Swagger', 'SonarQube', 'DevOps'],
    github: 'https://github.com/KGovind-maker/pruleads-system',
    live: null
  },
  {
    title: 'Loan Management System (LMS)',
    description: 'End-to-end loan processing solution with automated workflows, bulk operations, and real-time status tracking. Features account management, scheduler services, and comprehensive reporting dashboard.',
    image: <ProjectPlaceholder title="Loan Management" />,
    technologies: ['Java', 'Spring Boot', 'JPA', 'AWS', 'WDP API', 'Angular 7', 'Eureka', 'Ribbon', 'Hystrix', 'Feign Client', 'Black/White Box Testing'],
    github: 'https://github.com/KGovind-maker/loan-management',
    live: null
  },
  {
    title: 'Automatic Ticket Creation (ATC)',
    description: 'AI-powered ticket generation system using machine learning algorithms to predict and create support tickets automatically, reducing manual intervention by 70% and improving response times.',
    image: <ProjectPlaceholder title="ATC System" />,
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'Machine Learning', 'SQL', 'MapR', 'Cassandra', 'JUnit', 'Selenium', 'Jenkins'],
    github: 'https://github.com/KGovind-maker/atc-system',
    live: null
  },
  {
    title: 'Customer Purchase Order Administration (CPOA)',
    description: 'Streamlined purchase order processing system with automated validation, approval workflows, and integration with ERP systems. Handles high-volume transactions with 99.9% accuracy.',
    image: <ProjectPlaceholder title="CPOA System" />,
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'JUnit', 'Mockito'],
    github: 'https://github.com/KGovind-maker/cpoa-system',
    live: null
  },
  {
    title: 'Fun Club – Employee Social Networking Platform',
    description: 'Internal social platform for employee collaboration featuring media sharing, speech recognition, and real-time communication. Integrated with corporate authentication and HR systems.',
    image: <ProjectPlaceholder title="Fun Club" />,
    technologies: ['Java', 'Apache Wicket', 'OAuth', 'WDP API', 'Speech Commands', 'PostgreSQL'],
    github: 'https://github.com/KGovind-maker/fun-club',
    live: null
  },
  {
    title: 'Insite – Predictive Analytics Platform',
    description: 'Advanced analytics platform using machine learning to provide business insights and predictive recommendations. Features interactive dashboards and automated reporting capabilities.',
    image: <ProjectPlaceholder title="Insite Analytics" />,
    technologies: ['Java', 'Spring Boot', 'Machine Learning', 'REST APIs', 'Jenkins', 'JUnit', 'Mockito'],
    github: 'https://github.com/KGovind-maker/insite-analytics',
    live: null
  }
];
