// src/components/Footer.tsx
'use client';
import React from 'react';

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: '#030303',
            color: '#9ca3af',
            padding: '80px 40px 40px 40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            fontFamily: 'sans-serif'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '40px',
                marginBottom: '60px'
            }}>
                {/* Brand Info */}
                <div>
                    <h3 style={{ fontSize: '13px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#fff', marginBottom: '20px' }}>
                        ༄Ᏼђᴀvєѕн✘G²⁸ <span style={{ color: '#D4AF37' }}>| VILLA</span>
                    </h3>
                    <p style={{ fontSize: '13px', lineHeight: 1.6, fontWeight: 300, color: '#9ca3af', maxWidth: '300px' }}>
                        A transcendent luxury experience nestled in the majestic heights, crafted exclusively for the refined few.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff', marginBottom: '20px' }}>
                        Navigation
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '12px', letterSpacing: '0.15em' }}>
                        <li><a href="#villa" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>VILLA</a></li>
                        <li><a href="#experience" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>EXPERIENCE</a></li>
                        <li><a href="#amenities" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>AMENITIES</a></li>
                        <li><a href="#location" style={{ color: '#9ca3af', textDecoration: 'none', transition: 'color 0.3s' }}>LOCATION</a></li>
                    </ul>
                </div>

                {/* Contact / Inquiries */}
                <div>
                    <h4 style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#fff', marginBottom: '20px' }}>
                        Inquiries
                    </h4>
                    <p style={{ fontSize: '12px', lineHeight: 1.6, fontWeight: 300, marginBottom: '10px' }}>
                        For private reservations and estate viewings:
                    </p>
                    <p style={{ fontSize: '13px', color: '#D4AF37', letterSpacing: '0.1em' }}>
                        concierge@bmorevilla.com
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                paddingTop: '30px',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '20px',
                fontSize: '11px',
                letterSpacing: '0.15em'
            }}>
                <p>© 2026 ༄Ᏼђᴀvєѕн✘G²⁸ VILLA. All rights reserved.</p>
                <div style={{ display: 'flex', gap: '25px' }}>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Privacy Policy</a>
                    <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}