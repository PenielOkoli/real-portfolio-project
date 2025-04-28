import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-indigo-400">
              Tochukwu Okoli
            </Link>
            <p className="mt-2 text-gray-400">
            Frontend Developer | Financial Market Analyst &amp; Crypto Enthusiast
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="flex space-x-4">
              <Link
                href="https://linkedin.com/in/OkoliTochukwu15"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/PenielOkoli"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com/OkoliTochukwu15"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:tochiokoli2020@gmail.com"
                className="text-gray-400 hover:text-indigo-400 transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              © {currentYear} Tochukwu Okoli. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
