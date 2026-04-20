import { useState } from 'react';

type Lesson = {
  title: string;
  image: string;
  url: string;
};

type ArcGalleryHeroProps = {
  lessons: Lesson[];
  className?: string;
};

const ArcGalleryHero = ({ lessons, className = '' }: ArcGalleryHeroProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className={`relative bg-background min-h-screen flex flex-col items-center justify-center px-4 py-16 ${className}`}>
      <div className="text-center max-w-2xl mb-10 opacity-0 animate-fade-in" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
          Библейские интерактивы
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Нажми на карточку — и сразу начни изучать урок.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 w-full max-w-4xl">
        {lessons.map((lesson, i) => {
          const isHovered = hoveredIndex === i;
          return (
            <a
              key={i}
              href={lesson.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 animate-fade-in-up block relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-border bg-card cursor-pointer"
              style={{
                width: 'min(280px, 85vw)',
                height: 'min(280px, 85vw)',
                animationDelay: `${200 + i * 100}ms`,
                animationFillMode: 'forwards',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                boxShadow: isHovered ? '0 20px 40px rgba(0,0,0,0.3)' : undefined,
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={lesson.image}
                alt={lesson.title}
                className="block w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 flex items-end justify-center pb-4 bg-gradient-to-t from-black/70 to-transparent">
                <span className="text-white text-base font-semibold text-center px-3 leading-tight">
                  {lesson.title}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default ArcGalleryHero;
