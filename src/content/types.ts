import tones from '@/styles/tones.module.scss';

export type Tone = 'pink' | 'acid' | 'lime' | 'cyan';

/** A paragraph made of plain strings and highlighted fragments. */
export type RichText = Array<string | { strong: string; tone: Tone }>;

export const toneBg: Record<Tone, string> = {
  pink: tones.bgPink,
  acid: tones.bgAcid,
  lime: tones.bgLime,
  cyan: tones.bgCyan,
};

export const toneText: Record<Tone, string> = {
  pink: tones.textPink,
  acid: tones.textAcid,
  lime: tones.textLime,
  cyan: tones.textCyan,
};
