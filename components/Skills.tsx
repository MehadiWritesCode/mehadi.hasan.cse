"use client";

import { useState, useEffect, useRef } from "react";

const sections = [
  "Frontend",
  "Backend",
  "Database",
  "Tools",
  "Languages",
] as const;
type Section = (typeof sections)[number];

const categories = {
  Frontend: [
    { name: "Next.js", level: 90 },
    { name: "React", level: 88 },
    { name: "TypeScript", level: 82 },
    { name: "Tailwind CSS", level: 95 },
    { name: "HTML/CSS", level: 93 },
  ],
  Backend: [
    { name: "Node.js", level: 78 },
    { name: "Express", level: 75 },
    { name: "REST API", level: 80 },
  ],
  Database: [
    { name: "PostgreSQL", level: 70 },
    { name: "MySQL", level: 70 },
  ],
  Tools: [
    { name: "Git", level: 70 },
    { name: "VS Code", level: 95 },
    { name: "Vercel", level: 80 },
    { name: "Linux", level: 65 },
  ],
  Languages: [],
};

const badges = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "PostgreSQL",
  "Git",
  "Vercel",
  "Express",
  "REST API",
];

const LangIcon = ({ lang }: { lang: string }) => {
  const icons: Record<string, React.ReactNode> = {
    C: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000" />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontFamily="Georgia,serif"
          fontSize="15"
          fontWeight="700"
          fill="#fff"
        >
          C
        </text>
      </svg>
    ),
    "C++": (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000" />
        <text
          x="11"
          y="22"
          textAnchor="middle"
          fontFamily="Georgia,serif"
          fontSize="13"
          fontWeight="700"
          fill="#fff"
        >
          C
        </text>
        <text
          x="23"
          y="22"
          textAnchor="middle"
          fontFamily="Georgia,serif"
          fontSize="13"
          fontWeight="700"
          fill="#fff"
        >
          ++
        </text>
      </svg>
    ),
    Java: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000" />
        <rect x="10" y="18" width="12" height="2" rx="1" fill="#fff" />
        <path
          d="M11 12 Q11 10 13 10 Q13 13 15 13 Q17 13 17 10 Q19 10 19 12 L19 18 L11 18 Z"
          fill="#fff"
        />
        <path
          d="M19 13.5 Q22 13.5 22 15.5 Q22 17.5 19 17.5"
          stroke="#fff"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    ),
    JavaScript: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000" />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontFamily="Georgia,serif"
          fontSize="13"
          fontWeight="700"
          fill="#fff"
        >
          JS
        </text>
      </svg>
    ),
    Python: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000" />
        <path
          d="M10 10 Q10 8 13 8 L17 8 Q20 8 20 11 L20 14 L12 14 L12 17 L20 17 L20 21 Q20 24 17 24 L13 24 Q10 24 10 21"
          stroke="#fff"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="13.5" cy="11" r="1" fill="#fff" />
        <circle cx="18.5" cy="21" r="1" fill="#fff" />
      </svg>
    ),
    PHP: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000" />
        <text
          x="16"
          y="22"
          textAnchor="middle"
          fontFamily="Georgia,serif"
          fontSize="13"
          fontWeight="700"
          fill="#fff"
        >
          PHP
        </text>
      </svg>
    ),
    Assembly: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000" />
        <rect
          x="11"
          y="11"
          width="10"
          height="10"
          rx="2"
          stroke="#fff"
          strokeWidth="1.5"
          fill="none"
        />
        <line
          x1="13"
          y1="11"
          x2="13"
          y2="9"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="11"
          x2="16"
          y2="9"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="19"
          y1="11"
          x2="19"
          y2="9"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="13"
          y1="21"
          x2="13"
          y2="23"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="16"
          y1="21"
          x2="16"
          y2="23"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="19"
          y1="21"
          x2="19"
          y2="23"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="11"
          y1="14"
          x2="9"
          y2="14"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="11"
          y1="18"
          x2="9"
          y2="18"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="21"
          y1="14"
          x2="23"
          y2="14"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <line
          x1="21"
          y1="18"
          x2="23"
          y2="18"
          stroke="#fff"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  };
  return <>{icons[lang] ?? null}</>;
};

const languages = [
  { name: "C", tag: "Systems" },
  { name: "C++", tag: "Systems" },
  { name: "Java", tag: "OOP" },
  { name: "JavaScript", tag: "Web" },
  { name: "Python", tag: "General" },
  { name: "PHP", tag: "Backend" },
  { name: "Assembly", tag: "Low-level" },
];

/* ─── Skill Bar ─────────────────────────────────────────────────────────── */
function SkillBar({
  name,
  level,
  delay = 0,
}: {
  name: string;
  level: number;
  delay?: number;
}) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimated(true);
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-1.5">
        <span className="text-[13px] font-medium text-black/70 group-hover:text-black transition-colors duration-200">
          {name}
        </span>
        <span
          className="font-mono text-[11px] text-black/40 group-hover:text-black transition-colors duration-200"
          style={{ fontVariantNumeric: "tabular-nums" }}
        >
          {level}%
        </span>
      </div>
      <div className="h-[3px] bg-black/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full bg-black rounded-full transition-all duration-700 ease-out"
          style={{
            width: animated ? `${level}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

/* ─── Main Component ─────────────────────────────────────────────────────── */
export default function Skills() {
  const [active, setActive] = useState<Section>("Frontend");
  const navRef = useRef<HTMLDivElement>(null);

  // Scroll active tab into view on mobile
  const handleNav = (sec: Section) => {
    setActive(sec);
    const btn = navRef.current?.querySelector(
      `[data-tab="${sec}"]`,
    ) as HTMLElement | null;
    btn?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  const skillList = categories[active];

  return (
    <>
      {/* Marquee keyframe + nav scroll hide */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 22s linear infinite; }
        .skills-nav::-webkit-scrollbar { display: none; }
        .skills-nav { -ms-overflow-style: none; scrollbar-width: none; }
        .tab-btn { position: relative; }
        .tab-btn::after {
          content: "";
          position: absolute;
          bottom: -1px;
          left: 0; right: 0;
          height: 2px;
          background: black;
          transform: scaleX(0);
          transition: transform 0.2s ease;
          border-radius: 2px;
        }
        .tab-btn.active::after,
        .tab-btn:hover::after { transform: scaleX(1); }
      `}</style>

      <section
        id="skills"
        className="lg:ml-[240px] py-28 bg-white border-t border-black/[0.06]"
      >
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16">
          {/* Label */}
          <div className="flex items-center gap-4 mb-16">
            <span className="font-mono text-[11px] text-black/30 uppercase tracking-[0.25em]">
              03 — Skills
            </span>
            <div className="flex-1 h-px bg-black/[0.07]" />
          </div>

          {/* Heading */}
          <div className="mb-10">
            <h2 className="font-semibold text-[clamp(1.9rem,3.5vw,2.8rem)] text-black leading-[1.15]">
              My tech stack
            </h2>
            <p className="text-black/40 mt-2 text-base">
              Tools I reach for when building products.
            </p>
          </div>

          {/* ── Sticky Nav ───────────────────────────────────────────────── */}
          <div className="sticky top-0 z-20 bg-white/90 backdrop-blur-sm border-b border-black/[0.07] mb-10 -mx-5 sm:-mx-8 lg:-mx-16 px-5 sm:px-8 lg:px-16">
            <nav
              ref={navRef}
              className="skills-nav flex overflow-x-auto gap-0"
              aria-label="Skills navigation"
            >
              {sections.map((sec) => (
                <button
                  key={sec}
                  data-tab={sec}
                  onClick={() => handleNav(sec)}
                  className={`tab-btn flex-shrink-0 px-4 sm:px-5 py-4 text-[12px] sm:text-[13px] font-medium uppercase tracking-[0.12em] transition-colors duration-200 outline-none ${
                    active === sec
                      ? "active text-black"
                      : "text-black/35 hover:text-black/70"
                  }`}
                >
                  {sec}
                </button>
              ))}
            </nav>
          </div>

          {/* ── Content Panel ─────────────────────────────────────────────── */}

          {/* Skill bars (Frontend / Backend / Database / Tools) */}
          {active !== "Languages" && (
            <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5 mb-14">
              {skillList.map((skill, i) => (
                <SkillBar
                  key={`${active}-${skill.name}`}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 60}
                />
              ))}
            </div>
          )}

          {/* Languages grid */}
          {active === "Languages" && (
            <div className="grid grid-cols-4 xs:grid-cols-4 sm:grid-cols-7 gap-3 mb-14">
              {languages.map((lang) => (
                <div
                  key={lang.name}
                  className="bg-white border border-black/[0.08] rounded-xl p-3 sm:p-4 flex flex-col items-center gap-2 hover:border-black/25 hover:-translate-y-1 hover:shadow-md active:translate-y-0 active:shadow-none transition-all duration-200 cursor-default"
                >
                  <LangIcon lang={lang.name} />
                  <span className="text-[11px] sm:text-[12px] font-semibold text-black text-center leading-tight">
                    {lang.name}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-black/35 tracking-wide">
                    {lang.tag}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Marquee badge strip */}
          <div className="overflow-hidden border-y border-black/[0.07] py-4">
            <div className="flex animate-marquee gap-3 w-max">
              {[...badges, ...badges].map((b, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 text-[11px] uppercase tracking-[0.15em] px-4 py-2 bg-white border border-black/[0.08] rounded-full text-black hover:border-black/30 hover:bg-black hover:text-white transition-colors duration-200 cursor-default"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
