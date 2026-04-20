import ArcGalleryHero from "@/components/ArcGalleryHero";

const lessons = [
  {
    title: "Сотворение мира",
    image: "/freepik__enhance__98192.png",
    url: "https://ваша-ссылка-1.com",
  },
  {
    title: "Ной и ковчег",
    image: "/LS.png",
    url: "https://ваша-ссылка-2.com",
  },
  {
    title: "Авраам и вера",
    image: "/freepik__a-closeup-shot-features-a-glossy-purple-crossshape__48873.png",
    url: "https://ваша-ссылка-3.com",
  },
  {
    title: "Исход из Египта",
    image: "/freepik__the-style-is-3d-model-with-octane-render-volumetri__57555.png",
    url: "https://ваша-ссылка-4.com",
  },
  {
    title: "Десять заповедей",
    image: "/eqirGoRIJPaIMgEUeliWpNxeFmI.jpg",
    url: "https://ваша-ссылка-5.com",
  },
  {
    title: "Давид и Голиаф",
    image: "/ultra-detailed_close-up_side_profile_of_a_dark-skinned_model_wearing_futuristic_chrome_wraparound_s_ps17q5ms2ptu5t6bdru6_2.png",
    url: "https://ваша-ссылка-6.com",
  },
  {
    title: "Пророки",
    image: "/slide.png",
    url: "https://ваша-ссылка-7.com",
  },
  {
    title: "Рождество Иисуса",
    image: "/freepik__abstract-digital-art-featuring-a-series-of-horizon__489.png",
    url: "https://ваша-ссылка-8.com",
  },
  {
    title: "Нагорная проповедь",
    image: "/abstract-blue-gradient.webp",
    url: "https://ваша-ссылка-9.com",
  },
  {
    title: "Воскресение",
    image: "/VkvvhXlWo3hEBzcqwTpjd_aa4bf9ee998f4ec0b17a8bf16fe3e9e2.jpg",
    url: "https://ваша-ссылка-10.com",
  },
  {
    title: "Деяния апостолов",
    image: "/hyperrealistic_commercial_product_photography_of_luxury_chrome_sunglasses_on_male_model_extreme_chi_fanguv2w9zx489lcivwa_2.png",
    url: "https://ваша-ссылка-11.com",
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
