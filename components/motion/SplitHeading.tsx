/** Заголовок появляется по буквам с маской снизу вверх (stagger 25 мс). Серверный компонент, анимация на CSS. */
export function SplitHeading({ text, className = '' }: { text: string; className?: string }) {
  let i = 0;
  return (
    <h1 className={className} aria-label={text}>
      {text.split(' ').map((word, w) => (
        <span key={w} aria-hidden className="inline-block whitespace-nowrap">
          {[...word].map((ch) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
              <span className="letter" style={{ animationDelay: `${0.1 + 0.025 * i++}s` }}>{ch}</span>
            </span>
          ))}
          {' '}
        </span>
      ))}
    </h1>
  );
}
