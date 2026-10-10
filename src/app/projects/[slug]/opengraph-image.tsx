import { ImageResponse } from 'next/og';
import { getProject } from '@/content/projects';

export const alt = 'Kevin Camargo — case study';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Same visual system as the home OG image, with the project title and stack.
export default async function ProjectOpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  const title = project?.title ?? 'Case study';
  const tags = project?.tags.slice(0, 5).join(' · ') ?? '';

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
        <div style={{ display: 'flex', flexDirection: 'column', gap: 28, zIndex: 1, maxWidth: 820 }}>
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              background: '#FF2E88',
              color: '#0B0B0C',
              padding: '8px 16px',
              fontSize: 26,
              fontFamily: 'monospace',
              transform: 'rotate(-2deg)',
            }}
          >
            CASE STUDY
          </div>
          <div style={{ display: 'flex', fontSize: 96, fontWeight: 900, lineHeight: 0.95, letterSpacing: -2 }}>
            {title.toUpperCase()}
          </div>
          <div style={{ display: 'flex', fontSize: 30, color: '#C6FF00', fontFamily: 'monospace' }}>&gt; {tags}</div>
          <div style={{ display: 'flex', fontSize: 26, color: '#B9B4A8', fontFamily: 'monospace' }}>
            Kevin Camargo · Full Stack Engineer · kevincamargo.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
