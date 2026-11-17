import { Highlight } from './Highlight';

type Title = { before: string; highlight: string; after?: string };

/** Renders copy from /data: plain text, one [highlighted] phrase, optional trailing text. */
export function TitleWithHighlight({ title }: { title: Title }) {
  return (
    <>
      {title.before}
      <Highlight>{title.highlight}</Highlight>
      {title.after}
    </>
  );
}
