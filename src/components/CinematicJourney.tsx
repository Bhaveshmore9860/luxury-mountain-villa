// src/components/CinematicJourney.tsx
import React from 'react';
import { scenesData } from '@/data/sceneData';
import ScrollFramePlayer from './ScrollFramePlayer';

export default function CinematicJourney() {
    return (
        <div className="relative w-full bg-black">
            {scenesData.map((scene, index) => (
                <React.Fragment key={scene.id}>
                    {/* Main Cinematic Scene Player */}
                    <ScrollFramePlayer scene={scene} />

                    {/* Small Black Gap between scenes (70px - 100px) as per requirement */}
                    {index < scenesData.length - 1 && (
                        <div className="h-[90px] w-full bg-black flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]/40" />
                        </div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
}