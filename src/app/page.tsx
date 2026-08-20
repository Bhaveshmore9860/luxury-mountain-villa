// src/app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScrollFramePlayer from '@/components/ScrollFramePlayer';
import Footer from '@/components/Footer'; // Imported footer
import { scenesData } from '@/data/sceneData';

export default function Home() {
    return (
        <main className="bg-black text-white min-h-screen">
            <Navbar />
            <Hero />

            {/* Loop through all cinematic scenes */}
            {scenesData.map((scene) => (
                <ScrollFramePlayer key={scene.id} scene={scene} />
            ))}

            <Footer /> {/* Added footer at the end */}
        </main>
    );
}