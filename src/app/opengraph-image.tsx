import { ImageResponse } from 'next/og';

export const alt = 'Kevin Camargo — Full Stack Engineer · Python, FastAPI, React, Next.js';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#0B0B0C',
          color: '#F5F1E8',
          padding: 72,
          position: 'relative',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              background: '#E2EA62',
              color: '#0B0B0C',
              padding: '8px 16px',
              fontSize: 26,
              fontFamily: 'monospace',
              transform: 'rotate(-2deg)',
            }}
          >
            FULL STACK ENGINEER
          </div>
          <div style={{ display: 'flex', fontSize: 120, fontWeight: 900, lineHeight: 0.95, letterSpacing: -2 }}>
            KEVIN CAMARGO
          </div>
          <div style={{ display: 'flex', fontSize: 34, color: '#C6FF00', fontFamily: 'monospace' }}>
            &gt; python · fastapi · react · next.js · llms
          </div>
          <div style={{ display: 'flex', fontSize: 26, color: '#B9B4A8', fontFamily: 'monospace' }}>
            Remote · Lima, Peru (UTC-5) · kevincamargo.com
          </div>
        </div>
        <div style={{ position: 'absolute', right: 60, bottom: 60, width: 220, height: 260, display: 'flex' }}>
          <div style={{ position: 'absolute', inset: 0, background: '#00E5FF', transform: 'rotate(4deg)' }} />
          <div style={{ position: 'absolute', left: 20, top: 50, width: 100, height: 170, background: '#FF2E88' }} />
          <div style={{ position: 'absolute', left: 120, top: 40, width: 80, height: 180, background: '#E2EA62' }} />
          <div
            style={{
              position: 'absolute',
              left: 40,
              top: 100,
              width: 46,
              height: 24,
              background: '#F5F1E8',
              border: '4px solid #0B0B0C',
              borderRadius: '70% 0 70% 0',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 140,
              top: 90,
              width: 36,
              height: 36,
              background: '#F5F1E8',
              border: '4px solid #0B0B0C',
              borderRadius: 999,
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
