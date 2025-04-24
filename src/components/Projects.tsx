import Image from 'next/image';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Link from 'next/link';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Financial Assistant',
    description: 'A conversational AI that helps users manage personal finances, providing insights and recommendations based on spending patterns.',
    tags: ['AI', 'NLP', 'Fintech', 'React', 'Node.js'],
    image: '/public/images/project-1.jpg',
    github: '#',
    live: '#'
  },
  {
    id: 2,
    title: 'Blockchain Payment Gateway',
    description: 'Decentralized payment solution that enables cross-border transactions with minimal fees using smart contracts.',
    tags: ['Blockchain', 'Smart Contracts', 'Web3', 'Solidity'],
    image: '/public/images/project-2.jpg',
    github: '#',
    live: '#'
  },
  {
    id: 3,
    title: 'Credit Risk Assessment Tool',
    description: 'Machine learning model that analyzes alternative data sources to assess creditworthiness for underbanked populations.',
    tags: ['Machine Learning', 'Python', 'Flask', 'Data Analysis'],
    image: '/public/images/project-3.jpg',
    github: '#',
    live: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <FiGithub /> Code
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    <FiExternalLink /> Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;