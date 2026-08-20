// src/components/ScrollFramePlayer.tsx
'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { SceneData } from '@/types';

interface ScrollFramePlayerProps {
    scene: SceneData;
}

export default function ScrollFramePlayer({ scene }: ScrollFramePlayerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);
    const imagesRef = useRef<HTMLImageElement[]>([]);
    const currentFrameRef = useRef<number>(0);

    // Helper to format frame names using startIndex
    const getFrameFilename = (index: number) => {
        const start = scene.startIndex || 1;
        const frameNum = start + index;
        const paddedNum = String(frameNum).padStart(3, '0');
        return `ezgif-frame-${paddedNum}.jpg`;
    };

    // Preload images with progress tracker
    useEffect(() => {
        let isMounted = true;
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        setImagesLoaded(false);

        for (let i = 0; i < scene.totalFrames; i++) {
            const img = new Image();
            const filename = getFrameFilename(i);
            img.src = `/frames/${scene.folder}/${filename}`;

            img.onload = () => {
                if (!isMounted) return;
                loadedCount++;
                const progress = Math.round((loadedCount / scene.totalFrames) * 100);
                setLoadProgress(progress);

                if (loadedCount === scene.totalFrames) {
                    setImagesLoaded(true);
                }
            };

            img.onerror = () => {
                if (!isMounted) return;
                loadedCount++;
                if (loadedCount === scene.totalFrames) {
                    setImagesLoaded(true);
                }
            };

            loadedImages.push(img);
        }

        imagesRef.current = loadedImages;

        return () => {
            isMounted = false;
        };
    }, [scene]);

    // Draw current frame on canvas with High-Quality Smoothing
    const renderFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = imagesRef.current[index];
        if (img && img.complete) {
            if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            }

            // High-Quality Image Smoothing enabled here for crystal-clear visuals
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';

            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);

            const centerShiftX = (canvas.width - img.width * ratio) / 2;
            const centerShiftY = (canvas.height - img.height * ratio) / 2;

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                centerShiftX,
                centerShiftY,
                img.width * ratio,
                img.height * ratio
            );
        }
    }, []);

    // Handle scroll progress within the sticky container
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current || !imagesLoaded) return;

            const container = containerRef.current;
            const rect = container.getBoundingClientRect();
            const scrollHeight = container.offsetHeight - window.innerHeight;

            if (scrollHeight <= 0) return;

            const currentScrollTop = -rect.top;
            let progress = currentScrollTop / scrollHeight;
            progress = Math.max(0, Math.min(1, progress));

            const frameIndex = Math.floor(progress * (scene.totalFrames - 1));

            if (frameIndex !== currentFrameRef.current) {
                currentFrameRef.current = frameIndex;
                requestAnimationFrame(() => renderFrame(frameIndex));
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        if (imagesLoaded) {
            renderFrame(0);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [imagesLoaded, scene.totalFrames, renderFrame]);

    // Handle window resizing
    useEffect(() => {
        const handleResize = () => {
            renderFrame(currentFrameRef.current);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [renderFrame]);

    return (
        <div ref={containerRef} style={{
            position: 'relative',
            height: '400vh',
            width: '100%',
            backgroundColor: '#000',
            marginBottom: '15vh'
        }}>
            <div style={{
                position: 'sticky',
                top: 0,
                height: '100vh',
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {/* Loading State Overlay */}
                {!imagesLoaded && (
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#000',
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: '11px',
                        letterSpacing: '0.3em',
                        zIndex: 20
                    }}>
                        <p style={{ marginBottom: '10px' }}>LOADING {scene.title}...</p>
                        <p style={{ color: '#D4AF37' }}>{loadProgress}%</p>
                    </div>
                )}

                {/* Canvas Element for Frames */}
                <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />

                {/* Cinematic Vignette Overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 40%, rgba(0,0,0,0.6) 100%)',
                    pointerEvents: 'none',
                    zIndex: 10
                }} />

                {/* Scene Text Description */}
                <div style={{
                    position: 'absolute',
                    bottom: '60px',
                    left: '50px',
                    zIndex: 30,
                    maxWidth: '500px',
                    color: '#fff',
                    pointerEvents: 'none'
                }}>
                    <p style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#D4AF37', textTransform: 'uppercase', marginBottom: '10px', fontWeight: 500 }}>
                        {scene.step}
                    </p>
                    <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)', fontFamily: 'serif', fontWeight: 300, letterSpacing: '0.05em', marginBottom: '15px', lineHeight: 1.1 }}>
                        {scene.title}
                    </h2>
                    <p style={{ color: '#d1d5db', fontSize: '0.95rem', fontWeight: 300, lineHeight: 1.6, marginBottom: '20px' }}>
                        {scene.description}
                    </p>
                    {scene.cta && (
                        <div style={{ pointerEvents: 'auto' }}>
                            <button style={{
                                padding: '12px 28px',
                                backgroundColor: '#fff',
                                color: '#000',
                                fontSize: '10px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.2em',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}>
                                {scene.cta}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}