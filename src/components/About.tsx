import { FaLightbulb, FaChartLine, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I&apos;m a technical product manager with a passion for building innovative solutions at the intersection of fintech and artificial intelligence. With a strong background in computer science and business strategy, I excel at translating complex technical concepts into actionable product roadmaps.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              My journey in tech began with software development, which gave me a solid foundation for understanding engineering challenges. This technical expertise, combined with my product management skills, allows me to effectively bridge the gap between business objectives and technical implementation.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I&apos;m not working on products, you can find me mentoring aspiring product managers, contributing to open-source projects, or exploring the latest trends in AI and blockchain technology.
            </p>
          </div>

          <div className="md:w-1/2 space-y-8">
            <div className="flex items-start gap-6">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <FaLightbulb className="text-indigo-600 dark:text-indigo-400 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Innovation Driven</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Constantly exploring new technologies and methodologies to create cutting-edge products that deliver exceptional user experiences.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <FaChartLine className="text-indigo-600 dark:text-indigo-400 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Data-Informed Decisions</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Leveraging analytics and user research to make strategic product decisions that drive growth and improve KPIs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <FaUsers className="text-indigo-600 dark:text-indigo-400 text-2xl" />
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2">Cross-Functional Leadership</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Skilled at aligning engineering, design, and business teams to deliver products that meet both user needs and business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
