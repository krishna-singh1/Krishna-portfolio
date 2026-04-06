import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { personalInfo } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border-subtle mt-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm md:text-base text-gray-600">
          © {new Date().getFullYear()} Krishna Singh. Built with React & Tailwind.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-accent transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-accent transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-accent transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
