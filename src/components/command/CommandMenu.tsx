'use client';

import { Command } from 'cmdk';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowRight, Copy, Download, ExternalLink, FileText } from 'lucide-react';
import { navItems, profile } from '@/content/profile';
import { caseStudyProjects } from '@/content/projects';
import styles from './CommandMenu.module.scss';

type Props = { open: boolean; onOpenChange: (open: boolean) => void };

export default function CommandMenu({ open, onOpenChange }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const run = (fn: () => void) => {
    onOpenChange(false);
    fn();
  };

  const goTo = (id: string) => {
    if (pathname === '/') {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', `#${id}`);
    } else {
      router.push(`/#${id}`);
    }
  };

  const openExternal = (url: string) => window.open(url, '_blank', 'noopener,noreferrer');

  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label="Command menu"
      overlayClassName={styles.overlay}
      contentClassName={styles.content}
    >
      <Command.Input placeholder="Type a command or search…" className={styles.input} />
      <Command.List className={styles.list}>
        <Command.Empty className={styles.empty}>No results.</Command.Empty>

        <Command.Group heading="Go to" className={styles.group}>
          {navItems.map((n) => (
            <Command.Item key={n.id} value={n.label} onSelect={() => run(() => goTo(n.id))} className={styles.item}>
              <ArrowRight size={16} aria-hidden /> {n.label}
            </Command.Item>
          ))}
          <Command.Item value="Resume" onSelect={() => run(() => router.push('/resume'))} className={styles.item}>
            <FileText size={16} aria-hidden /> Resume
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Projects" className={styles.group}>
          {caseStudyProjects.map((p) => (
            <Command.Item
              key={p.slug}
              value={p.title}
              onSelect={() => run(() => router.push(`/projects/${p.slug}`))}
              className={styles.item}
            >
              <ArrowRight size={16} aria-hidden /> {p.title}
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="Actions" className={styles.group}>
          <Command.Item
            value="Copy email"
            onSelect={() => run(() => void navigator.clipboard.writeText(profile.email))}
            className={styles.item}
          >
            <Copy size={16} aria-hidden /> Copy email
            <span className={styles.hint}>{profile.email}</span>
          </Command.Item>
          <Command.Item
            value="LinkedIn"
            onSelect={() => run(() => openExternal(profile.links.linkedin))}
            className={styles.item}
          >
            <ExternalLink size={16} aria-hidden /> Open LinkedIn
          </Command.Item>
          {profile.links.github && (
            <Command.Item
              value="GitHub"
              onSelect={() => run(() => openExternal(profile.links.github as string))}
              className={styles.item}
            >
              <ExternalLink size={16} aria-hidden /> Open GitHub
            </Command.Item>
          )}
          <Command.Item
            value="Download CV"
            onSelect={() => run(() => openExternal(profile.links.cv))}
            className={styles.item}
          >
            <Download size={16} aria-hidden /> Download CV
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
