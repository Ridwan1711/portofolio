import { Head, Link } from '@inertiajs/react';
import { Github, Code, Smartphone, Brain, Server, Network, Palette } from 'lucide-react';

interface Profile {
    name: string;
    title: string;
    description: string;
    github: string;
}

interface Skill {
    category: string;
    items: string[];
}

interface Project {
    name: string;
    tech: string;
    description: string;
}

interface TechStack {
    area: string;
    skills: string;
}

interface PortfolioProps {
    profile: Profile;
    skills: Skill[];
    projects: Project[];
    techStack: TechStack[];
    characteristics: string[];
}

const skillIcons: Record<string, React.ReactNode> = {
    'Full-Stack Web Development': <Code className="w-6 h-6" />,
    'Mobile Development (Flutter & Android Native)': <Smartphone className="w-6 h-6" />,
    'AI, Machine Learning & Optimization Systems': <Brain className="w-6 h-6" />,
    'DevOps & Cloud Deployment': <Server className="w-6 h-6" />,
    'Infrastructure & Networking': <Network className="w-6 h-6" />,
    'Design & Branding': <Palette className="w-6 h-6" />,
};

export default function Portfolio({
    profile,
    skills,
    projects,
    techStack,
    characteristics,
}: PortfolioProps) {
    return (
        <>
            <Head title="Ridwan Ramadhan - Portfolio">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700&family=inter:400,500,600,700"
                    rel="stylesheet"
                />
            </Head>

            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                {/* Navigation */}
                <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-lg dark:border-slate-700/80 dark:bg-slate-900/80">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="text-xl font-bold text-slate-900 dark:text-white">
                                Ridwan Ramadhan
                            </div>
                            <div className="flex items-center gap-4">
                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                                >
                                    <Github className="w-4 h-4" />
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative overflow-hidden py-20 sm:py-32">
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent)]" />
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-3xl text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-white">
                                {profile.name}
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                                {profile.title}
                            </p>
                            <p className="mt-6 text-base leading-7 text-slate-500 dark:text-slate-500">
                                {profile.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-20 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                                Keahlian Utama
                            </h2>
                            <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
                                Teknologi dan tools yang saya kuasai
                            </p>
                        </div>
                        <div className="mx-auto mt-16 grid max-w-2xl gap-8 lg:max-w-none lg:grid-cols-2">
                            {skills.map((skill, index) => (
                                <div
                                    key={index}
                                    className="group relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
                                >
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                                            {skillIcons[skill.category] || <Code className="w-6 h-6" />}
                                        </div>
                                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                                            {skill.category}
                                        </h3>
                                    </div>
                                    <ul className="space-y-3">
                                        {skill.items.map((item, itemIndex) => (
                                            <li
                                                key={itemIndex}
                                                className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400"
                                            >
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="bg-slate-50 py-20 sm:py-32 dark:bg-slate-900/50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                                Proyek-Proyek Besar
                            </h2>
                            <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
                                Beberapa proyek yang telah saya bangun
                            </p>
                        </div>
                        <div className="mx-auto mt-16 grid max-w-2xl gap-6 lg:max-w-none lg:grid-cols-3">
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
                                >
                                    <div className="mb-3">
                                        <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300">
                                            {project.tech}
                                        </span>
                                    </div>
                                    <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                                        {project.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section id="tech-stack" className="py-20 sm:py-32">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                                Bahasa Pemrograman & Tools
                            </h2>
                            <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
                                Teknologi yang saya gunakan dalam pengembangan
                            </p>
                        </div>
                        <div className="mx-auto mt-16 grid max-w-2xl gap-4 lg:max-w-none lg:grid-cols-4">
                            {techStack.map((tech, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
                                >
                                    <h3 className="mb-2 text-sm font-semibold text-slate-900 dark:text-white">
                                        {tech.area}
                                    </h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-400">
                                        {tech.skills}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="bg-slate-50 py-20 sm:py-32 dark:bg-slate-900/50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                                Karakter Profesional
                            </h2>
                            <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
                                Nilai-nilai yang saya pegang dalam bekerja
                            </p>
                        </div>
                        <div className="mx-auto mt-16 max-w-3xl">
                            <div className="grid gap-4 sm:grid-cols-2">
                                {characteristics.map((characteristic, index) => (
                                    <div
                                        key={index}
                                        className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md dark:border-slate-700 dark:bg-slate-800 dark:hover:border-slate-600"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                                                <span className="text-sm font-semibold">{index + 1}</span>
                                            </div>
                                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                                                {characteristic}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-slate-200 bg-white py-12 dark:border-slate-700 dark:bg-slate-900">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                            <p className="text-sm text-slate-600 dark:text-slate-400">
                                © {new Date().getFullYear()} Ridwan Ramadhan. All rights reserved.
                            </p>
                            <div className="flex items-center gap-4">
                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

