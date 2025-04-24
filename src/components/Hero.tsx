import Image from 'next/image';
import Link from 'next/link';
import { FiDownload, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I&apos;m <span className="text-indigo-600 dark:text-indigo-400">Tochukwu Okoli</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300">
              Cloud Infrastructure Intern | Frontend Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg">
              I build innovative fintech and AI products that solve real-world problems. 
              With a background in computer science and product management, I bridge the gap 
              between technology and business.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#contact"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-lg hover:shadow-indigo-500/30"
              >
                Contact Me
              </Link>
              <Link
                href="./public/resume.pdf" // Update this path to your resume file
                download
                className="px-6 py-3 border border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-lg hover:bg-indigo-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <FiDownload /> Download Resume
              </Link>
            </div>

            <div className="flex gap-4 pt-4">
              <Link
                href="https://linkedin.com/in/tochukwuokoli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/tochukwuokoli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/tochukwuokoli"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-indigo-500 shadow-xl">
              <Image
                src="/public/images/profile.png"
                alt="Tochukwu Okoli"
                // width={150}  // Set explicit dimensions
                // height={150}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
