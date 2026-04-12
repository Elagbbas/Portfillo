import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';

export default function ProjectCard({ title, desc, tags, index }) {
    return (
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -10 }} className="glass p-8 rounded-xl flex flex-col h-full group border border-white/5">
            <div className="flex justify-between items-center mb-8">
                <Folder className="text-accent w-10 h-10" />
                <div className="flex gap-4 text-gray-400">
                    <Github className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
                    <ExternalLink className="w-5 h-5 hover:text-accent cursor-pointer transition-colors" />
                </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{title}</h3>
            <p className="text-gray-400 mb-6 flex-grow leading-relaxed text-sm bg-primary/20 p-4 rounded">{desc}</p>
            <div className="flex gap-4 flex-wrap mt-auto">
                {tags.map(t => <span key={t} className="text-xs font-mono text-slate-400">{t}</span>)}
            </div>
        </motion.div>
    );
}
