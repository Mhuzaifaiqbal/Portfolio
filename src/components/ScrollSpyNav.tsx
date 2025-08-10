import { useEffect, useState } from "react";

const sections = [ "about", "education", "projects", "contact"];

const ScrollSpyNav = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      const newProgress = {};

      for (let id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        const rawProgress = (scrollY - top) / height;
        newProgress[id] = Math.min(Math.max(rawProgress, 0), 1);
      }

      setProgress(newProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-2 right-4 z-50 hidden md:flex gap-6 bg-black/50 px-4 py-2 rounded-xl backdrop-blur shadow-lg">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className="relative text-sm font-medium capitalize text-white hover:text-blue-500 transition-all duration-200"
        >
          {section}
          <span
            className="absolute left-0 -bottom-0.5 h-0.5 bg-blue-400 rounded-full transition-all duration-300"
            style={{
              width: `${(progress[section] || 0) * 100}%`,
            }}
          />
        </a>
      ))}
    </nav>
  );
};

export default ScrollSpyNav;
