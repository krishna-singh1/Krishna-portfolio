import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export function GithubIcon({ size = 18, className = "" }) {
  return <FaGithub size={size} className={className} />;
}

export function LinkedinIcon({ size = 18, className = "" }) {
  return <FaLinkedinIn size={size} className={className} />;
}

export function LeetcodeIcon({ size = 18, className = "" }) {
  return <SiLeetcode size={size} className={className} />;
}