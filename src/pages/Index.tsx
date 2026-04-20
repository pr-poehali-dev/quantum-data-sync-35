import ArcGalleryHero from "@/components/ArcGalleryHero";

const lessons = [
  {
    title: "Суд над Египетскими богами",
    image: "/freepik__enhance__98192.png",
    url: "https://ykazateli.ispring.ru/app/preview/13fea8b2-2dd6-11f1-b6ef-62753910bf61",
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