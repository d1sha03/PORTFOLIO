import { Mail, BookOpen } from 'lucide-react';

// ─── SVG icons ──────────────────────────────────────────────────────────────
const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-4.442 0-.981.351-1.782.922-2.405-.924-.058-1.895-.464-1.895-1.227 0-.67.24-1.214.635-1.615-.572-.642-1.488-1.022-1.488-2.159 0-.951.499-1.803 1.304-2.281-.412-1.271-.942-2.581-.942-2.581s-.482-.971 1.401-.971c.816 0 1.669.084 2.437.21 1.456-.492 3.019-.788 4.638-.788 1.62 0 3.182.296 4.639.788.768-.126 1.62-.21 2.437-.21 1.883 0 1.402.97 1.402.97s-.46 1.31-.942 2.581c.805.478 1.304 1.33 1.304 2.281 0 .764-.38 1.516-.953 2.159.613.403 1.053 1.045 1.053 1.615 0 .764-.486 1.169-1.895 1.227.571.623.922 1.424.922 2.405 0 3.109-2.802 4.138-5.467 4.442.344.299.655.829.762 1.604.684.307 2.422.837 3.492-.997.695-1.233 1.329-2.386 2.399-1.834 0 0 .75-.98 1.839-1.237 0 0 .083-.016.083.729 0 .546-.788 1.37-1.333 1.756 0 0-.487 1.03-4.033 1.416v2.234c0 .316.194.688.793.577C20.566 21.798 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
);
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
);

// ─── Pill ───────────────────────────────────────────────────────────────────
function Pill({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-[#051F45]/10 bg-[#051F45]/5 px-4 py-2 text-sm font-medium text-[#40516F]">{children}</span>;
}

// ─── Data ───────────────────────────────────────────────────────────────────
const contactLinks = [
  { label: 'Email', href: 'mailto:sainidisha585@gmail.com', icon: Mail },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/disha-saini-973183343', icon: LinkedinIcon },
  { label: 'GitHub', href: 'https://github.com/d1sha03', icon: GithubIcon },
  { label: 'Hashnode', href: 'https://hashnode.com/@d1shaa', icon: BookOpen },
];

const allSkills = [
  'Python', 'C++', 'SQL', 'PyTorch', 'TensorFlow', 'Scikit-learn',
  'Hugging Face', 'PyTorch Geometric', 'GNNs (GCN, GAT)', 'CNNs', 'U-Net',
  'Audio Processing', 'Computer Vision', 'SHAP', 'LIME',
  'Pandas', 'NumPy', 'Albumentations', 'torchaudio', 'librosa',
  'Git/GitHub', 'Flask', 'Docker', 'Jupyter', 'LaTeX', 'Weights & Biases',
  'Ablation Studies', 'Statistical Analysis', 'Reproducible Research',
];

const researchPublications = [
  {
    role: 'First Author | Under Review',
    title: 'Graph-Semantic-Net: Text-Guided Real-Time Audio Source Separation',
    points: [
      'Proposed harmonic GCN\u2013U-Net hybrid with CLAP cross-attention for zero-shot audio separation.',
      'Achieved 31% parameter reduction vs. traditional U-Net while maintaining real-time inference.',
    ],
    tech: ['PyTorch', 'torchaudio', 'PyTorch Geometric', 'U-Net', 'CLAP', 'Hugging Face'],
    repo: 'https://github.com/d1sha03/AUDIO-SOURCE-SEPARATION',
  },
  {
    role: 'Co-Author | NICEDT-2026',
    title: 'Real-Time Crowd Classification Using Deep CNNs',
    points: [
      'Designed 3-layer CNN achieving 82% accuracy, 82% F1, AUC 0.88.',
      'Optimized to 87% recall for crowded class \u2014 7% AUC improvement over baseline.',
    ],
    tech: ['PyTorch', 'Albumentations', 'Flask', 'OpenCV'],
    repo: 'https://github.com/sakshamsharma0621/Crowd-Detection-Project',
  },
];

const researchProjects = [
  {
    title: 'CNN Optimizer Ablation Study \u2014 CIFAR-10',
    description: 'Systematic ablation comparing SGD, Adam, AdamW, RMSProp. Achieved 80.53% validation accuracy with SGD. Analyzed convergence and generalization gaps.',
    tech: ['PyTorch', 'CNNs', 'Experimental Design'],
    repo: 'https://github.com/d1sha03/CIFAR-10-CNN-PROJECT',
  },
  {
    title: 'Loan Default Prediction with Explainable ML',
    description: 'CatBoost model with SHAP interpretability. ROC-AUC 0.75 with robust validation and ablation-based feature analysis.',
    tech: ['CatBoost', 'SHAP', 'Scikit-learn', 'Pandas'],
    repo: 'https://github.com/d1sha03/loan-default-prediction',
  },
];

const articles = [
  { title: 'Beyond Black Boxes: Architecting a Text-Guided Audio Separator', href: 'https://audioseparation.hashnode.dev/beyond-black-boxes-architecting-a-text-guided-audio-separator' },
  { title: 'My Baseline Broke: What an 18% Accuracy Gap Taught Me', href: 'https://d1shasaini.hashnode.dev/my-baseline-broke-what-an-18-accuracy-gap-taught-me-about-deep-learning' },
  { title: 'Building JananiVaani: Voice-First Maternal Care', href: 'https://jananivani.hashnode.dev/building-jananivaani-voice-first-maternal-care-for-the-60-of-rural-women-without-smartphones' },
];

// ─── Marquee ────────────────────────────────────────────────────────────────
function SkillMarquee() {
  const doubled = [...allSkills, ...allSkills];
  return (
    <div className="overflow-hidden border-y border-[#051F45]/10 py-5 bg-white/40">
      <div className="marquee-track">
        {doubled.map((skill, i) => (
          <span key={i} className="flex-shrink-0 mx-5 text-lg font-medium uppercase tracking-[0.15em] text-[#051F45]/45">
            {skill}
            <span className="ml-10 text-[#D9788F]/60">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── App ───────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <main className="min-h-screen bg-[#FFF8F4] text-[#051F45]">

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#051F45] px-6 py-24 text-center text-[#F2C4CD] md:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,196,205,0.15),transparent_40%)]" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center">
          <img
            src="/profile.jpeg"
            alt="Disha Saini"
            className="mb-10 h-52 w-52 rounded-lg border-4 border-[#F2C4CD]/25 object-cover shadow-2xl shadow-black/30 md:h-64 md:w-64"
          />
          <h1 className="font-serif text-6xl font-semibold leading-tight md:text-8xl">
            Disha Saini
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-9 text-[#F2C4CD]/75 md:text-2xl md:leading-10">
            B.Tech CSE &mdash; AI & Machine Learning
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#F2C4CD] px-6 py-3 text-sm font-semibold text-[#051F45] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-white"
              >
                <link.icon className="h-4 w-4" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Scrolling Skills Marquee ────────────────────────────────────── */}
      <SkillMarquee />

      {/* ── Education & Leadership ──────────────────────────────────────── */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="font-serif text-5xl font-semibold text-center mb-16">Education & Leadership</h2>
        <div className="rounded-3xl border border-[#051F45]/10 bg-white p-10 shadow-sm text-center">
          <h3 className="font-serif text-3xl font-semibold mb-2">National Institute of Electronics & Information Technology</h3>
          <p className="text-[#637089] mb-6">B.Tech Computer Science Engineering • 2024–2028</p>
          <p className="text-lg font-medium text-[#051F45] mb-8">Overall Class Rank: 2</p>
          <div className="border-t border-[#051F45]/10 pt-8">
            <h4 className="font-serif text-2xl font-semibold mb-4">Leadership: President, VAKTAVYA</h4>
            <p className="text-[#637089] leading-relaxed">
              Leading the Oratory & Public Speaking Society, managing events like Model UNs, debates, and crisis committees for 200+ participants, while mentoring students in communication.
            </p>
          </div>
        </div>
      </section>

      {/* ── Research Publications ───────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="mb-16 text-center font-serif text-5xl font-semibold md:text-6xl">
          Research Publications
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {researchPublications.map((pub, i) => (
            <article key={i} className="rounded-[2rem] border border-[#051F45]/10 bg-white p-8 text-center shadow-xl shadow-[#051F45]/5 md:p-10">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D9788F]">{pub.role}</p>
              <h3 className="font-serif text-3xl font-semibold leading-snug">{pub.title}</h3>
              <div className="mx-auto mt-6 max-w-xl space-y-3 text-lg leading-8 text-[#637089]">
                {pub.points.map((p, j) => <p key={j}>{p}</p>)}
              </div>
              <div className="mt-7 flex flex-wrap justify-center gap-2">
                {pub.tech.map((t) => <Pill key={t}>{t}</Pill>)}
              </div>
              <a href={pub.repo} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#051F45] px-6 py-3 text-sm font-semibold text-[#F2C4CD] transition hover:bg-[#0B326D]">
                <GithubIcon className="h-4 w-4" />
                View Repository
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ── Research Projects ───────────────────────────────────────────── */}
      <section className="bg-[#F2C4CD]/25 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-16 text-center font-serif text-5xl font-semibold md:text-6xl">
            Research Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {researchProjects.map((proj, i) => (
              <article key={i} className="rounded-[2rem] border border-[#051F45]/10 bg-white p-8 text-center shadow-xl shadow-[#051F45]/5 transition hover:-translate-y-1 hover:shadow-2xl md:p-10">
                <h3 className="font-serif text-3xl font-semibold leading-snug">{proj.title}</h3>
                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#637089]">{proj.description}</p>
                <div className="mt-7 flex flex-wrap justify-center gap-2">
                  {proj.tech.map((t) => <Pill key={t}>{t}</Pill>)}
                </div>
                <a
                  href={proj.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#051F45] px-6 py-3 text-sm font-semibold text-[#F2C4CD] transition hover:bg-[#0B326D]"
                >
                  <GithubIcon className="h-4 w-4" />
                  View Repository
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technical Writing ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center md:py-28">
        <h2 className="mb-16 font-serif text-5xl font-semibold md:text-6xl">
          Technical Writing
        </h2>
        <div className="space-y-0">
          {articles.map((a, i) => (
            <a
              key={i}
              href={a.href}
              target="_blank"
              rel="noreferrer"
              className="group block border-b border-[#051F45]/10 px-4 py-8 text-center transition hover:bg-white/60"
            >
              <BookOpen className="mx-auto mb-3 h-6 w-6 text-[#D9788F]" />
              <h3 className="text-2xl font-semibold leading-snug group-hover:text-[#D9788F]">{a.title}</h3>
              <span className="mt-3 inline-block text-sm font-semibold text-[#D9788F]">Read article &rarr;</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Contact Footer ────────────────────────────────────────────── */}
      <section className="bg-[#051F45] px-6 py-20 text-center text-[#F2C4CD] md:py-28">
        <h2 className="font-serif text-5xl font-semibold md:text-7xl">Let's collaborate</h2>
        <p className="mx-auto mt-6 max-w-xl text-xl leading-9 text-[#F2C4CD]/70">
          Open to research collaborations, internships, and AI/ML projects.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#F2C4CD] px-6 py-3 text-sm font-semibold text-[#051F45] transition hover:-translate-y-0.5 hover:bg-white"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </a>
          ))}
        </div>
        <p className="mt-16 text-sm text-[#F2C4CD]/40">Last updated: January 2025</p>
      </section>
    </main>
  );
}
