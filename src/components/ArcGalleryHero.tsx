import { useEffect, useState } from 'react';

type Lesson = {
  title: string;
  image: string;
  url: string;
};

type ArcGalleryHeroProps = {
  lessons: Lesson[];
  startAngle?: number;
  endAngle?: number;
  radiusLg?: number;
  radiusMd?: number;
  radiusSm?: number;
  cardSizeLg?: number;
  cardSizeMd?: number;
  cardSizeSm?: number;
  className?: string;
};

const ArcGalleryHero = ({
  lessons,
  startAngle = -110,
  endAngle = 110,
  radiusLg = 340,
  radiusMd = 280,
  radiusSm = 200,
  cardSizeLg = 120,
  cardSizeMd = 100,
  cardSizeSm = 80,
  className = '',
}: ArcGalleryHeroProps) => {
  const [dimensions, setDimensions] = useState({
    radius: radiusLg,
    cardSize: cardSizeLg,
  });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({ radius: radiusSm, cardSize: cardSizeSm });
      } else if (width < 1024) {
        setDimensions({ radius: radiusMd, cardSize: cardSizeMd });
      } else {
        setDimensions({ radius: radiusLg, cardSize: cardSizeLg });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [radiusLg, radiusMd, radiusSm, cardSizeLg, cardSizeMd, cardSizeSm]);

  const count = Math.max(lessons.length, 2);
  const step = (endAngle - startAngle) / (count - 1);

  return (
    <section className={`relative overflow-hidden bg-background min-h-screen flex flex-col ${className}`}>
      <div
        className="relative mx-auto"
        style={{
          width: '100%',
          height: dimensions.radius * 1.2,
        }}
      >
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2">
          {lessons.map((lesson, i) => {
            const angle = startAngle + step * i;
            const angleRad = (angle * Math.PI) / 180;
            const x = Math.cos(angleRad) * dimensions.radius;
            const y = Math.sin(angleRad) * dimensions.radius;
            const isHovered = hoveredIndex === i;

            return (
              <div
                key={i}
                className="absolute opacity-0 animate-fade-in-up"
                style={{
                  width: dimensions.cardSize,
                  height: dimensions.cardSize,
                  left: `calc(50% + ${x}px)`,
                  bottom: `${y}px`,
                  transform: `translate(-50%, 50%)`,
                  animationDelay: `${i * 100}ms`,
                  animationFillMode: 'forwards',
                  zIndex: isHovered ? 100 : count - i,
                }}
              >
                <a
                  href={lesson.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={lesson.title}
                  className="block w-full h-full cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className="rounded-2xl shadow-xl overflow-hidden ring-1 ring-border bg-card w-full h-full relative"
                    style={{
                      transform: `rotate(${angle / 4}deg) scale(${isHovered ? 1.15 : 1})`,
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                      boxShadow: isHovered ? '0 20px 40px rgba(0,0,0,0.3)' : undefined,
                    }}
                  >
                    <img
                      src={lesson.image}
                      alt={lesson.title}
                      className="block w-full h-full object-cover"
                      draggable={false}
                    />
                    {isHovered && (
                      <div className="absolute inset-0 flex items-end justify-center pb-2 bg-gradient-to-t from-black/70 to-transparent rounded-2xl">
                        <span className="text-white text-[10px] font-semibold text-center px-1 leading-tight line-clamp-2">
                          {lesson.title}
                        </span>
                      </div>
                    )}
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-10 flex-1 flex items-center justify-center px-6 -mt-40 md:-mt-52 lg:-mt-64">
        <div className="text-center max-w-2xl px-6 opacity-0 animate-fade-in" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            Библейские интерактивы
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Нажми на карточку — и сразу начни изучать урок в интерактивном формате.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Выбери урок
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArcGalleryHero;
