import { Fragment, type ReactNode } from 'react';
import { typograph } from '@/lib/typograph';

const PH = /(\[[^\[\]\n]+\])/g;

/** Текст из /content: типографика + заглушки `[… — уточнить]` в пунктирной рамке. */
export function T({ children, as: Tag = 'span' }: { children: string; as?: 'span' | 'p' | 'div' }): ReactNode {
  const parts = typograph(children).split(PH);
  return (
    <Tag>
      {parts.map((p, i) =>
        PH.test(p) ? (
          <span key={i} className="ph" data-placeholder>
            {p}
          </span>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </Tag>
  );
}
