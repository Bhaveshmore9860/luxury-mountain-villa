// src/data/sceneData.ts
import { SceneData } from '@/types';

export const scenesData: SceneData[] = [
    {
        id: 1,
        folder: 'scene1',
        totalFrames: 279,
        startIndex: 1, // Starts from ezgif-frame-001
        step: '01 / 05',
        title: 'THE APPROACH',
        description: 'Where majestic mountains meet modern architectural luxury.',
    },
    {
        id: 2,
        folder: 'scene2',
        totalFrames: 239,
        startIndex: 2, // Starts from ezgif-frame-002
        step: '02 / 05',
        title: 'THE ARRIVAL',
        description: 'Your private residence floating high above the clouds.',
    },
    {
        id: 3,
        folder: 'scene3',
        totalFrames: 222,
        startIndex: 2, // Starts from ezgif-frame-002
        step: '03 / 05',
        title: 'STEP INSIDE',
        description: 'Immersive spaces engineered around your panoramic view.',
    },
    {
        id: 4,
        folder: 'scene4',
        totalFrames: 221, // 129 total frames (002 to 130)
        startIndex: 1, // Starts from ezgif-frame-002 (as noted)
        step: '04 / 05',
        title: 'THE LIVING SPACE',
        description: 'Crafted for moments that linger in memory forever.',
    },
    {
        id: 5,
        folder: 'scene5',
        totalFrames: 239,
        startIndex: 2, // Starts from ezgif-frame-002
        step: '05 / 05',
        title: 'LIVE ABOVE THE CLOUDS',
        description: 'Experience absolute seclusion and peerless elegance.',
        cta: 'BOOK YOUR STAY',
    },
];