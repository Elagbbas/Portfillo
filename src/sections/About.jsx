import { motion } from 'framer-motion';

// 🎨 عدّل الـ sizes من هنا بسهولة
const FONT_SIZES = {
    title: '3.5rem',      // About Me
    subtitle: '1.60rem',   // My introduction
    paragraph: '1.275rem', // الفقرات
};

export default function About() {
    return (
        <>
            {/* Fredoka Font Import */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap');
                #about * {
                    font-family: 'Fredoka', sans-serif !important;
                }
            `}</style>

            <section id="about" className="py-24 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="container mx-auto max-w-4xl"
                >
                    {/* Header - Centered with underline */}
                    <div className="flex flex-col items-center mb-12">
                        <h2
                            className="font-bold text-white mb-3"
                            style={{ fontSize: FONT_SIZES.title }}
                        >
                            About Me
                        </h2>
                        <span
                            className="font-medium mb-4"
                            style={{ color: '#0d7377', fontSize: FONT_SIZES.subtitle }}
                        >
                            My introduction
                        </span>
                        <div className="h-0.5 w-16 bg-white/40 rounded-full"></div>
                    </div>

                    {/* Paragraphs */}
                    <div className="text-gray-300 space-y-6">
                        <p style={{ lineHeight: '1.9', fontSize: FONT_SIZES.paragraph }}>
                            Hi, I'm Ahmed Mahmoud Ahmed Elgabbas, a Computer Science and Artificial Intelligence student at Helwan National University specializing in Robotics Software Engineering. I am a passionate Software and Mobile Application Developer with a strong foundation in programming, problem-solving, and software architecture.
                        </p>
                        <p style={{ lineHeight: '1.9', fontSize: FONT_SIZES.paragraph }}>
                            I have hands-on experience in C, C++, Python, and Java, along with front-end web development using HTML, CSS, and JavaScript. I also specialize in mobile application development using Flutter, where I build cross-platform applications with responsive user interfaces, clean architecture, and scalable solutions.
                        </p>
                        <p style={{ lineHeight: '1.9', fontSize: FONT_SIZES.paragraph }}>
                            Beyond technical expertise, I Member of HR Committee at HNU-FCSIT ICPC Community and Head of Sports Committee at HNU-FCSIT Student Union. These leadership roles have strengthened my abilities in team management, event organization, and fostering collaborative environments. I am passionate about continuous learning, problem-solving, and delivering impactful solutions.
                        </p>
                    </div>

                    {/* View CV Button */}
                    <div className="flex justify-center mt-12">
                        <a
                            href="/Ahmed-Mahmoud-Ahmed-Elgabbas-FlowCV-Resume-20241202.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '12px 32px',
                                borderRadius: '8px',
                                border: '1.5px solid #0d7377',
                                color: '#fff',
                                backgroundColor: 'transparent',
                                fontSize: '1rem',
                                fontFamily: 'Fredoka, sans-serif',
                                fontWeight: '500',
                                textDecoration: 'none',
                                transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
                                cursor: 'pointer',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.backgroundColor = '#0d7377';
                                e.currentTarget.style.boxShadow = '0 0 20px rgba(13,115,119,0.6)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            View CV
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                                <polyline points="14 2 14 8 20 8" />
                                <line x1="16" y1="13" x2="8" y2="13" />
                                <line x1="16" y1="17" x2="8" y2="17" />
                                <polyline points="10 9 9 9 8 9" />
                            </svg>
                        </a>
                    </div>
                </motion.div>
            </section>
        </>
    );
}