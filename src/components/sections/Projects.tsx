import { projects } from '@/content/projects';
import { Section } from '@/components/ui/Section';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.scss';

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      label="Projects"
      tone="lime"
      tilt={-1.5}
      title="Selected work"
      shards={[
        { shape: 'square', tone: 'cyan' },
        { shape: 'tri', tone: 'pink' },
        { shape: 'circle', tone: 'acid' },
      ]}
    >
      <div className={styles.grid}>
        {projects.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
