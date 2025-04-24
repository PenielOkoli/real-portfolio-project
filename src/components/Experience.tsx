import { FiBriefcase } from 'react-icons/fi';

const experiences = [
  {
    id: 1,
    role: 'Technical Product Manager',
    company: 'Fintech Startup',
    duration: '2021 - Present',
    description: [
      'Led the development of AI-powered financial analytics platform that increased user engagement by 40%',
      'Collaborated with engineering to implement blockchain-based payment solutions',
      'Defined product roadmap and prioritized features based on market research and user feedback',
      'Managed cross-functional team of 12 engineers, designers, and data scientists'
    ]
  },
  {
    id: 2,
    role: 'Product Manager',
    company: 'Tech Corporation',
    duration: '2019 - 2021',
    description: [
      'Spearheaded the launch of mobile banking app with 500K+ downloads in first year',
      'Conducted competitive analysis to identify market opportunities and threats',
      'Worked closely with UX team to improve customer onboarding flow, reducing drop-off rate by 25%',
      'Implemented agile methodologies that reduced time-to-market by 30%'
    ]
  },
  {
    id: 3,
    role: 'Software Engineer',
    company: 'Financial Services Company',
    duration: '2017 - 2019',
    description: [
      'Developed backend services for high-volume transaction processing system',
      'Optimized database queries that improved system performance by 35%',
      'Participated in product planning sessions, providing technical feasibility assessments',
      'Mentored junior developers and conducted code reviews'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 w-1 h-full bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`mb-12 flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 w-6 h-6 bg-indigo-600 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                <FiBriefcase className="text-white text-sm" />
              </div>

              {/* Experience card */}
              <div
                className={`w-full md:w-5/12 p-6 rounded-lg shadow-md bg-white dark:bg-gray-800 ${
                  index % 2 === 0 ? 'mr-auto md:mr-0 md:pr-16' : 'ml-auto md:ml-0 md:pl-16'
                }`}
              >
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{exp.role}</h3>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                  <span className="font-medium">{exp.company}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.duration}</span>
                </div>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-indigo-500 mr-2">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;