export default function Footer() {
    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@400;500;600;700&display=swap');
                footer { font-family: 'Fredoka', sans-serif !important; }
            `}</style>
            <footer className="py-5 text-center text-gray-500 text-base hover:text-accent transition-colors cursor-pointer relative z-10">
                © 2026 Ahmed ElGabbas, All rights reserved.
            </footer>
        </>
    );
}
