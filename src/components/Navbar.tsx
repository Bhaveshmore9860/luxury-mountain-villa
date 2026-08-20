// src/components/Navbar.tsx
'use client';
import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 30px',
            zIndex: 100,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
            {/* Brand Logo */}
            <Link href="/" style={{ fontSize: '12px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                ༄Ᏼђᴀvєѕн✘G²⁸ <span style={{ color: '#D4AF37' }}>| VILLA</span>
            </Link>

            {/* 4 Navigation Links */}
            <div style={{ display: 'flex', gap: '25px', fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                <Link href="/" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>VILLA</Link>
                <Link href="/experience" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>EXPERIENCE</Link>
                <Link href="/amenities" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>AMENITIES</Link>
                <Link href="/location" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>LOCATION</Link>
            </div>

            {/* Book Stay CTA Button */}
            <div>
                <Link href="/amenities" style={{
                    padding: '8px 18px',
                    backgroundColor: '#fff',
                    color: '#000',
                    fontSize: '10px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    textDecoration: 'none',
                    fontWeight: 500,
                    whiteSpace: 'nowrap'
                }}>
                    BOOK STAY
                </Link>
            </div>
        </nav>
    );
}