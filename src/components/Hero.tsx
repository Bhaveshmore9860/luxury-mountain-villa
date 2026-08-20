// src/components/Hero.tsx
'use client';
import React from 'react';

export default function Hero() {
    return (
        <section style={{
            position: 'relative',
            height: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            backgroundColor: '#000',
            color: '#fff',
            textAlign: 'center'
        }}>
            {/* Background Luxury Villa Image */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url('/images/villa.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.65,
                transform: 'scale(1.03)',
            }} />

            {/* Dark Cinematic Vignette/Gradient Overlay */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.7) 100%)'
            }} />

            {/* Hero Content */}
            <div style={{ position: 'relative', zIndex: 10, maxWidth: '800px', padding: '0 20px', marginTop: '40px' }}>
                <p style={{
                    fontSize: '11px',
                    letterSpacing: '0.4em',
                    color: '#D4AF37',
                    textTransform: 'uppercase',
                    marginBottom: '15px',
                    fontWeight: 500
                }}>
                    EXCLUSIVITY REDEFINED
                </p>

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                    fontFamily: 'serif',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                    marginBottom: '20px',
                    lineHeight: 1.15
                }}>
                    LIVE ABOVE <br />THE CLOUDS
                </h1>

                <p style={{
                    color: '#d1d5db',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)',
                    fontWeight: 300,
                    letterSpacing: '0.05em',
                    marginBottom: '40px',
                    maxWidth: '550px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    lineHeight: 1.6
                }}>
                    A private sanctuary nestled in the mountains, designed exclusively for the transcendent luxury experience.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#9ca3af', marginBottom: '10px' }}>
                        SCROLL TO ENTER
                    </span>
                    <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, #D4AF37, transparent)' }} />
                </div>
            </div>
        </section>
    );
}