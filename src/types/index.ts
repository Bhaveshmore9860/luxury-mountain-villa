// src/types/index.ts
export interface SceneData {
    id: number;
    folder: string;
    totalFrames: number;
    startIndex?: number; // It is necessary to add this new property here
    step: string;
    title: string;
    description: string;
    cta?: string;
}