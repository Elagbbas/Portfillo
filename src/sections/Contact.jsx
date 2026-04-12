import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap');
                #contact * { font-family: 'Fredoka', sans-serif !important; }
            `}</style>

            <section id="contact" className="py-24 px-6 bg-[#0f172a] relative overflow-hidden">

                {/* Glow from top - above header */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-indigo-600/30 blur-[80px] rounded-full pointer-events-none -translate-y-1/2" />

                <div className="container mx-auto max-w-[1100px] relative z-10">

                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-14"
                    >
                        <h2 className="text-5xl font-bold text-white mb-2">Contact</h2>
                        <p className="text-gray-400 text-lg mb-3">Get in touch</p>
                        <div className="w-14 h-[2.5px] bg-gray-300 mx-auto rounded-full" />
                    </motion.div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-6">

                        {/* Left - Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#111827] rounded-2xl p-9 flex flex-col gap-4"
                        >
                            <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>

                            {[
                                {
                                    icon: (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                                        </svg>
                                    ),
                                    label: 'Email',
                                    value: 'ahmedelgabbas769@gmail.com',
                                },
                                {
                                    icon: (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.35 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                        </svg>
                                    ),
                                    label: 'Phone',
                                    value: '+20 111 702 4500',
                                },
                                {
                                    icon: (
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                                        </svg>
                                    ),
                                    label: 'Location',
                                    value: 'Giza, Egypt',
                                },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="bg-[#1a2235] rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:bg-[#1e2d45] hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] cursor-pointer"
                                >
                                    <div className="bg-[#1e2d45] rounded-xl w-11 h-11 flex items-center justify-center flex-shrink-0">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <div className="text-white font-semibold text-base">{item.label}</div>
                                        <div className="text-gray-400 text-sm mt-0.5">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        {/* Right - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-[#111827] rounded-2xl p-9 flex flex-col gap-4"
                        >
                            <h3 className="text-2xl font-semibold text-white mb-2">Send me a message</h3>

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="bg-[#1a2235] rounded-xl px-5 py-4 text-gray-400 placeholder-gray-600 outline-none w-full text-base"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="bg-[#1a2235] rounded-xl px-5 py-4 text-gray-400 placeholder-gray-600 outline-none w-full text-base"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="bg-[#1a2235] rounded-xl px-5 py-4 text-gray-400 placeholder-gray-600 outline-none w-full text-base"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows={5}
                                className="bg-[#1a2235] rounded-xl px-5 py-4 text-gray-400 placeholder-gray-600 outline-none w-full text-base resize-none"
                            />
                            <button className="w-full bg-[#1a2235] border border-[#2a3a55] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#1e2d45] hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.25)] transition-all duration-300 flex items-center justify-center gap-2">
                                Send Message ➤
                            </button>
                        </motion.div>

                    </div>
                </div>
            </section>
        </>
    );
}