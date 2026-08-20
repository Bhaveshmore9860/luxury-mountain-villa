// src/app/amenities/page.tsx
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AmenitiesPage() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />
            <div style={{ padding: '160px 40px 80px 40px', maxWidth: '1000px', margin: '0 auto' }}>
                <p style={{ fontSize: '11px', letterSpacing: '0.4em', color: '#D4AF37', textTransform: 'uppercase', marginBottom: '15px' }}>
                    WORLD-CLASS LIVING
                </p>
                <h1 style={{ fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontFamily: 'serif', fontWeight: 300, marginBottom: '30px' }}>
                    EXCLUSIVE AMENITIES
                </h1>
                <p style={{ color: '#d1d5db', fontSize: '1.1rem', fontWeight: 300, lineHeight: 1.8, marginBottom: '40px' }}>
                    From private infinity pools overlooking the majestic mountain ranges to custom architectural lounging spaces, every corner is meticulously curated for peerless elegance.
                </p>
            </div>
            <Footer />
        </main>
    );
}