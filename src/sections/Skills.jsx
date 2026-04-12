import { motion } from 'framer-motion';

const skillsData = [
    { icon: '</>', title: 'Programming Languages', skills: ['C', 'C++', 'C#', 'LINQ', 'Python', 'Java', 'Go', 'SQL'] },
    { icon: '🌐', title: 'Core Skills', skills: ['Algorithm', 'Data Structures', 'OOP', 'Problem Solving'] },
    { icon: '📱', title: 'Mobile Development', skills: ['Flutter', 'Dart', 'Firebase', 'Android', 'iOS'] },
    { icon: '🌐', title: 'Frontend Development', skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'SASS', 'Angular', 'React', 'Next.js', 'Framer Motion', 'Redux'] },
    { icon: '🛠️', title: 'Backend Development', skills: ['Node.js', 'Express.js', 'ASP.NET Core', 'Django', 'MongoDB', 'PostgreSQL', 'MySQL', 'REST APIs'] },
    { icon: '🛢️', title: 'Databases Technologies', skills: ['MySQL', 'PostgreSQL', 'MS SQL Server', 'SQLite', 'MongoDB'] },
    { icon: '⚙️', title: 'Tools & IDEs', skills: ['Git', 'GitHub', 'Docker', 'Postman', 'Linux', 'VS Code'] },
    { icon: '🖥️', title: 'Operating Systems', skills: ['Windows', 'Linux', 'Ubuntu'] },
    { icon: '👥', title: 'Soft Skills', skills: ['Communication', 'Teamwork', 'Time Management', 'Leadership', 'Critical Thinking', 'Creativity', 'Adaptability', 'Self-Motivation', 'Conflict Resolution', 'Empathy', 'Active Listening', 'Negotiation'] },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="py-20 px-7 bg-[#0f172a]"
            style={{ fontFamily: "'Fredoka', sans-serif" }}
        >
            <div className="container mx-auto max-w-[1100px]">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2 className="text-5xl font-bold text-white mb-1">My Skills</h2>
                    <p className="text-teal-400 text-lg mb-2">Technical Proficiencies</p>
                    <div className="w-12 h-0.5 bg-purple-600 mx-auto rounded-full" />
                </motion.div>

                {/* Skills Categories */}
                <div className="space-y-10">
                    {skillsData.map((category, i) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06 }}
                        >
                            {/* Title OUTSIDE the box */}
                            <div className="flex items-center gap-3 mb-3">
                                <div className="bg-[#1a1a2e] rounded-xl w-12 h-12 flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                                    {category.icon}
                                </div>
                                <h3 className="text-white font-bold text-4xl">{category.title}</h3>
                            </div>

                            {/* Underline */}
                            <div className="w-80 h-[3px] bg-gradient-to-r from-purple-500 to-transparent mb-4 rounded-full" />

                            {/* Skills box - full width */}
                            <div className="bg-[#0d0d18] border border-[#1e1e32] rounded-2xl p-7 flex flex-wrap gap-3.5 w-full">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="bg-[#1a1f2e] border border-[#2a3045] rounded-xl px-6 py-3 text-lg font-medium text-[#c4c4d4] cursor-default transition-all duration-200 hover:scale-110 hover:bg-[#2d1a5e] hover:border-purple-500 hover:text-white hover:shadow-[0_0_14px_#7c3aed55]"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}