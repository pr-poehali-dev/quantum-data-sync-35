import ArcGalleryHero from "@/components/ArcGalleryHero";

const lessons = [
  {
    title: "Суд над Египетскими богами",
    image: "https://cdn.poehali.dev/projects/d852fa21-a1bb-4bf9-94a7-00d0c984a2fb/bucket/91bf4686-a247-42f0-8ae7-3bbbfc87390e.png",
    url: "https://ykazateli.ispring.ru/app/preview/13fea8b2-2dd6-11f1-b6ef-62753910bf61",
  },
  {
    title: "Инструкция к жизни 1.0",
    image: "https://cdn.poehali.dev/projects/d852fa21-a1bb-4bf9-94a7-00d0c984a2fb/bucket/cf3719fc-07ad-4a6c-a015-46eba80c691d.jpg",
    url: "https://ykazateli.ispring.ru/app/preview/a5fe919a-0988-11f1-a01c-06c14def4bf4",
  },
];

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background">
      <ArcGalleryHero
        lessons={lessons}
        startAngle={20}
        endAngle={160}
        radiusLg={480}
        radiusMd={360}
        radiusSm={260}
        cardSizeLg={120}
        cardSizeMd={100}
        cardSizeSm={80}
        className="pt-16 pb-16 md:pt-20 md:pb-20 lg:pt-24 lg:pb-24"
      />
    </main>
  );
};

export default Index;