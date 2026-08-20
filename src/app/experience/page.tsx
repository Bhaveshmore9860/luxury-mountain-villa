// src/app/experience/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ExperiencePage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />
            <div style={{ padding: '160px 40px 80px 40px', maxWidth: '1000px', margin: '0 auto' }}>
                <p style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#D4AF37', textTransform: 'uppercase', marginBottom: '15px' }}>
                    THE JOURNEY
                </p>
                <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontFamily: 'serif', fontWeight: 300, marginBottom: '30px' }}>
                    IMMERSIVE EXPERIENCE
                </h1>
                <p style={{ color: '#d1d5db', fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.8, marginBottom: '40px' }}>
                    Step beyond the ordinary. Our estate offers absolute seclusion merged with state-of-the-art modern comforts, designed to give you an unmatched transcendent lifestyle high above the clouds.
                </p>
            </div>
            <Footer />
        </main>
    );
}