import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import ecpcPreview from '../assets/certificates/ecpc-preview.jpg.jpeg';
import databasePreview from '../assets/certificates/database-preview.jpg.jpeg';
import itiPreview from '../assets/certificates/iti-preview.jpg.jpeg';
import internPreview from '../assets/certificates/intern-preview.jpg.jpeg';
import swePreview from '../assets/certificates/swe-preview.jpg.jpeg';

const certificatesData = [
    {
        title: "ICPC ECPC Qualifications Certificate",
        issuer: "ICPC — Helwan National University",
        date: "August 03, 2025",
        description: "Achieved 114th place in the 2025 ICPC ECPC Qualifications Collegiate Programming Contest. Demonstrated strong competitive programming skills and algorithmic problem-solving under pressure.",
        tags: ["Competitive Programming", "Algorithms", "ICPC"],
        preview: ecpcPreview,
        driveLink: "https://drive.google.com/file/d/1SsrIlGZOzcoqK9PTAFZbGQ4iSnavBn-M/view?usp=sharing"
    },
    {
        title: "Database Fundamentals Certificate",
        issuer: "Mahara-Tech — ITI Platform",
        date: "January 20, 2026",
        description: "Completed the Database Fundamentals course (2h 47min) on ITI's Mahara-Tech platform. Gained solid knowledge in database design, SQL queries, and data modeling. Verification code: 7KalJ2PlJ1.",
        tags: ["SQL", "Database Design", "Data Modeling"],
        preview: databasePreview,
        driveLink: "https://drive.google.com/file/d/1Eu7FeXwrBbWPV9jNkc7y3CvjByApJRUf/view?usp=sharing"
    },
    {
        title: "Introduction to Software Testing Certificate",
        issuer: "Mahara-Tech — ITI Platform",
        date: "January 20, 2026",
        description: "Completed the Introduction to Software Testing Concepts & Techniques course (1h 20min) on ITI's Mahara-Tech platform. Covers core testing methodologies and quality assurance practices. Verification code: EITP6DSUGq.",
        tags: ["Software Testing", "QA", "ITI"],
        preview: itiPreview,
        driveLink: "https://drive.google.com/file/d/1r3EAzN9W9pdUcjzs98eGDz7jfAKsmbXd/view?usp=sharing"
    },
    {
        title: "Software Engineer Intern Certificate",
        issuer: "HackerRank",
        date: "March 01, 2026",
        description: "Passed the HackerRank role certification test for Software Engineer Intern. Certificate of Accomplishment presented to Ahmed ElGabbas. ID: 0BA671170530.",
        tags: ["Software Engineering", "HackerRank", "Certification"],
        preview: internPreview,
        driveLink: "https://drive.google.com/file/d/1UbKf3WUNxRBsK7XPDeSIMk3tlAcK-VIy/view?usp=sharing"
    },
    {
        title: "Software Engineer Certificate",
        issuer: "HackerRank",
        date: "January 21, 2026",
        description: "Passed the HackerRank role certification test for Software Engineer. Certificate of Accomplishment presented to Ahmed ElGabbas. ID: A5E88E74A78D.",
        tags: ["Software Engineering", "HackerRank", "Certification"],
        preview: swePreview,
        driveLink: "https://drive.google.com/file/d/1PnHu_i9IHHRwQPCSB5BDSQgnxq1K6-hI/view?usp=sharing"
    }
];

function CertCard({ cert, index, onClick }) {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => onClick(cert)}
            className="bg-[#1a1a2e] border rounded-2xl overflow-hidden cursor-pointer"
            style={{
                borderColor: hovered ? '#7c3aed' : '#1e1e32',
                boxShadow: hovered ? '0 0 28px #7c3aed44' : 'none',
                transform: hovered ? 'translateY(-6px) scale(1.015)' : 'translateY(0) scale(1)',
                transition: 'all 0.35s ease',
            }}
        >
            {/* Preview Image */}
            <div className="relative w-full h-44 bg-[#0f0f1e] overflow-hidden">
                {cert.preview ? (
                    <img
                        src={cert.preview}
                        alt={cert.title}
                        className="w-full h-full object-cover"
                        style={{
                            transform: hovered ? 'scale(1.06)' : 'scale(1)',
                            transition: 'transform 0.4s ease'
                        }}
                    />
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-2 opacity-25">
                        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                            <polyline points="14 2 14 8 20 8" />
                            <line x1="16" y1="13" x2="8" y2="13" />
                            <line x1="16" y1="17" x2="8" y2="17" />
                        </svg>
                        <span className="text-[#4a4a6a] text-xs">No Preview</span>
                    </div>
                )}

                {/* Hover Overlay */}
                <div
                    className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                    style={{
                        background: 'rgba(124,58,237,0.4)',
                        opacity: hovered ? 1 : 0,
                    }}
                >
                    <div
                        className="bg-purple-600 text-white text-sm font-semibold px-5 py-2 rounded-full flex items-center gap-2"
                        style={{
                            transform: hovered ? 'translateY(0)' : 'translateY(8px)',
                            transition: 'transform 0.3s'
                        }}
                    >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                        View Certificate
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                        <div
                            className="p-2 rounded-xl transition-colors duration-300"
                            style={{ background: hovered ? '#7c3aed' : 'rgba(124,58,237,0.2)' }}
                        >
                            <svg
                                width="16" height="16" viewBox="0 0 24 24" fill="none"
                                stroke={hovered ? '#fff' : '#a78bfa'}
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            >
                                <circle cx="12" cy="8" r="6" />
                                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                            </svg>
                        </div>
                        <span className="text-teal-400 text-sm font-medium">{cert.issuer}</span>
                    </div>
                    <span className="text-[#6b6b8a] text-xs">{cert.date}</span>
                </div>

                <h3
                    className="font-bold text-xl mb-2 leading-snug transition-colors duration-300"
                    style={{ color: hovered ? '#a78bfa' : '#ffffff' }}
                >
                    {cert.title}
                </h3>

                <p className="text-[#9090a8] text-sm leading-relaxed mb-4">
                    {cert.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                    {cert.tags.map((t) => (
                        <span
                            key={t}
                            className="border border-purple-600/30 text-purple-300 text-[11px] px-2.5 py-0.5 rounded-full bg-purple-600/10"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

function CertModal({ cert, onClose }) {
    if (!cert) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-6"
                style={{ background: 'rgba(0,0,0,0.85)' }}
                onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
            >
                <motion.div
                    initial={{ scale: 0.92, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.92, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 280, damping: 24 }}
                    className="bg-[#1a1a2e] border border-purple-600/30 rounded-2xl w-full overflow-y-auto relative"
                    style={{ maxWidth: '780px', maxHeight: '90vh', boxShadow: '0 0 60px #7c3aed33' }}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 z-10 flex items-center justify-center w-8 h-8 rounded-full text-lg transition-all duration-200"
                        style={{ background: 'rgba(124,58,237,0.2)', color: '#a78bfa' }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = '#7c3aed'; e.currentTarget.style.color = '#fff'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(124,58,237,0.2)'; e.currentTarget.style.color = '#a78bfa'; }}
                    >
                        ✕
                    </button>

                    {/* Certificate Image Preview */}
                    <div
                        className="w-full rounded-t-2xl overflow-hidden bg-[#0f0f1e] flex items-center justify-center"
                        style={{ height: '420px' }}
                    >
                        {cert.preview ? (
                            <img
                                src={cert.preview}
                                alt={cert.title}
                                className="w-full h-full object-contain"
                            />
                        ) : (
                            <div className="flex flex-col items-center gap-3 opacity-20">
                                <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                                    <polyline points="14 2 14 8 20 8" />
                                </svg>
                                <span className="text-[#4a4a6a] text-sm">No Preview Available</span>
                            </div>
                        )}
                    </div>

                    {/* Info */}
                    <div className="p-6">
                        <h3 className="text-white text-2xl font-bold mb-1">{cert.title}</h3>
                        <p className="text-teal-400 font-medium mb-1">{cert.issuer}</p>
                        <p className="text-[#6b6b8a] text-sm mb-3">{cert.date}</p>
                        <p className="text-[#9090a8] leading-relaxed mb-5">{cert.description}</p>

                        <div className="flex items-center gap-3 flex-wrap">
                            {/* Open on Drive */}
                            <a
                                href={cert.driveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
                                style={{ background: '#7c3aed' }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = '#6d28d9'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = '#7c3aed'; }}
                            >
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                                    <polyline points="15 3 21 3 21 9" />
                                    <line x1="10" y1="14" x2="21" y2="3" />
                                </svg>
                                Open Full Certificate ↗
                            </a>

                            {/* Close */}
                            <button
                                onClick={onClose}
                                className="inline-flex items-center gap-2 text-purple-300 text-sm font-semibold px-5 py-2.5 rounded-full border border-purple-600/40 transition-all duration-200"
                                style={{ background: 'transparent' }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(124,58,237,0.15)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; }}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default function Certificates() {
    const [selected, setSelected] = useState(null);

    return (
        <section
            id="certificates"
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
                    <h2 className="text-5xl font-bold text-white mb-1">Certificates</h2>
                    <p className="text-teal-400 text-lg mb-2">Professional Certifications</p>
                    <div className="w-12 h-0.5 bg-purple-600 mx-auto rounded-full" />
                </motion.div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {certificatesData.map((cert, i) => (
                        <CertCard
                            key={i}
                            cert={cert}
                            index={i}
                            onClick={setSelected}
                        />
                    ))}
                </div>

            </div>

            {/* Modal */}
            {selected && (
                <CertModal cert={selected} onClose={() => setSelected(null)} />
            )}
        </section>
    );
}