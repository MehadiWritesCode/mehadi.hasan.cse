"use client";

const categories = [
  {
    name: "Frontend",
    skills: [
      { name: "Next.js",      level: 90 },
      { name: "React",        level: 88 },
      { name: "TypeScript",   level: 82 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js",    level: 78 },
      { name: "Express",    level: 75 },
      { name: "PostgreSQL", level: 70 },
      { name: "MySQL",      level: 70 },
    ],
  },
  {
    name: "Design & Tools",
    skills: [
      { name: "Git",     level: 70 },
      { name: "VS Code", level: 95 },
      { name: "Vercel",  level: 80 },
      { name: "Linux",   level: 65 },
      { name: "PyCharm", level: 60 },
    ],
  },
];

const badges = [
  "Next.js","React","TypeScript","Tailwind","Node.js",
  "PostgreSQL","MongoDB","Figma","Git","Prisma",
  "Framer Motion","Vercel","Express","REST API","GraphQL",
];

// আলাদা SVG icon components
const LangIcon = ({ lang }: { lang: string }) => {
  const base = (
    <rect width="32" height="32" rx="8" fill="#000" />
  );

  const icons: Record<string, React.ReactNode> = {
    C: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000"/>
        <text x="16" y="22" textAnchor="middle" fontFamily="Georgia,serif" fontSize="15" fontWeight="700" fill="#fff">C</text>
      </svg>
    ),
    "C++": (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000"/>
        <text x="11" y="22" textAnchor="middle" fontFamily="Georgia,serif" fontSize="13" fontWeight="700" fill="#fff">C</text>
        <text x="23" y="22" textAnchor="middle" fontFamily="Georgia,serif" fontSize="13" fontWeight="700" fill="#fff">++</text>
      </svg>
    ),
    Java: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000"/>
        <rect x="10" y="18" width="12" height="2" rx="1" fill="#fff"/>
        <path d="M11 12 Q11 10 13 10 Q13 13 15 13 Q17 13 17 10 Q19 10 19 12 L19 18 L11 18 Z" fill="#fff"/>
        <path d="M19 13.5 Q22 13.5 22 15.5 Q22 17.5 19 17.5" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    JavaScript: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000"/>
        <text x="16" y="22" textAnchor="middle" fontFamily="Georgia,serif" fontSize="13" fontWeight="700" fill="#fff">JS</text>
      </svg>
    ),
    Python: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000"/>
        <path d="M10 10 Q10 8 13 8 L17 8 Q20 8 20 11 L20 14 L12 14 L12 17 L20 17 L20 21 Q20 24 17 24 L13 24 Q10 24 10 21" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
        <circle cx="13.5" cy="11" r="1" fill="#fff"/>
        <circle cx="18.5" cy="21" r="1" fill="#fff"/>
      </svg>
    ),
    PHP: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000"/>
        <text x="16" y="22" textAnchor="middle" fontFamily="Georgia,serif" fontSize="13" fontWeight="700" fill="#fff">PHP</text>
      </svg>
    ),
    Assembly: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="8" fill="#000"/>
        <rect x="11" y="11" width="10" height="10" rx="2" stroke="#fff" strokeWidth="1.5" fill="none"/>
        <line x1="13" y1="11" x2="13" y2="9" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="16" y1="11" x2="16" y2="9" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="19" y1="11" x2="19" y2="9" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="13" y1="21" x2="13" y2="23" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="16" y1="21" x2="16" y2="23" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="19" y1="21" x2="19" y2="23" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="11" y1="14" x2="9" y2="14" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="11" y1="18" x2="9" y2="18" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="21" y1="14" x2="23" y2="14" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
        <line x1="21" y1="18" x2="23" y2="18" stroke="#fff" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  };

  return <>{icons[lang]}</>;
};

const languages = [
  { name: "C",          tag: "Systems"   },
  { name: "C++",        tag: "Systems"   },
  { name: "Java",       tag: "OOP"       },
  { name: "JavaScript", tag: "Web"       },
  { name: "Python",     tag: "General"   },
  { name: "PHP",        tag: "Backend"   },
  { name: "Assembly",   tag: "Low-level" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="lg:ml-[240px] py-28 bg-white border-t border-black/[0.06]"
    >
      <div className="max-w-5xl mx-auto px-8 lg:px-16">

        {/* Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono-custom text-[11px] text-black/30 uppercase tracking-[0.25em]">
            03 — Skills
          </span>
          <div className="flex-1 h-px bg-black/[0.07]" />
        </div>

        <div className="mb-12">
          <h2 className="font-display font-semibold text-[clamp(1.9rem,3.5vw,2.8rem)] text-black leading-[1.15]">
            My tech stack
          </h2>
          <p className="text-black/40 mt-2 text-base">
            Tools I reach for when building products.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-14">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-white border border-black/[0.08] rounded-2xl p-7 hover:border-black/20 transition-colors duration-200"
            >
              <h3 className="font-display font-semibold text-base text-black mb-6">
                {cat.name}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span className="text-[13px] font-medium text-black/70">
                        {skill.name}
                      </span>
                      <span className="font-mono-custom text-[11px] text-black">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-[3px] bg-black/[0.06] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-black rounded-full"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Marquee badge strip */}
        <div className="overflow-hidden border-y border-black/[0.07] py-4 mb-14">
          <div className="flex animate-marquee gap-3 w-max">
            {[...badges, ...badges].map((b, i) => (
              <span
                key={i}
                className="flex-shrink-0 text-[11px] uppercase tracking-[0.15em] px-4 py-2 bg-white border border-black/[0.08] rounded-full text-black"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Programming Languages */}
        <div>
          <p className="font-serif text-[11px] text-black uppercase tracking-[0.2em] mb-6">
            Programming Languages
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
            {languages.map((lang) => (
              <div
  key={lang.name}
  className="bg-white border border-black/[0.08] rounded-xl p-4 flex flex-col items-center gap-2 hover:border-black/20 hover:-translate-y-0.5 transition-all duration-200"
>
  <LangIcon lang={lang.name} />
  <span className="text-[12px] font-semibold text-black">{lang.name}</span>
  <span className="text-[10px] text-black/35 tracking-wide">{lang.tag}</span>
</div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
