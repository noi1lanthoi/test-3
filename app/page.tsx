import { BannerSlider } from "@/components/banner-slider";
import { CategoryIcons } from "@/components/category-icons";
import { CategorySection } from "@/components/category-section";
import { ExclusiveGames } from "@/components/exclusive-games";
import { ProvidersGrid } from "@/components/providers-grid";
import { BANNERS } from "@/constants";
import { IMGS } from "@/assets/imgs";

export default function Home() {
  const banners = BANNERS;

  const exclusiveGames = [
    {
      image: IMGS.game1,
      status: "HOT",
      category: "100HP Gaming",
    },
    {
      image: IMGS.game2,
      status: "HOT",
      category: "VeliPlay",
    },
    {
      image: IMGS.game3,
      status: "NEW",
      category: "Evolution",
    },
    {
      image: IMGS.game4,
      status: "NEW",
      category: "VeliPlay",
    },
    {
      image: IMGS.game5,
      status: "",
      category: "Onlyplay",
    },
    {
      image: IMGS.game6,
      status: "",
      category: "VeliPlay",
    },
    {
      image: IMGS.game7,
      status: "",
      category: "VeliPlay",
    },
    {
      image: IMGS.game8,
      status: "",
      category: "VeliPlay",
    },
    {
      image: IMGS.game9,
      status: "",
      category: "VeliPlay",
    },
  ];

  const providers = [
    {
      name: "Evolution",
      image: IMGS.provider1,
      games: 312,
    },
    {
      name: "Spribe",
      image: IMGS.provider2,
      games: 12,
    },
    {
      name: "YeliPlay",
      image: IMGS.provider3,
      games: 9,
    },
    {
      name: "Turbo Games",
      image: IMGS.provider4,
      games: 36,
    },
    {
      name: "SmartSoft",
      image: IMGS.provider5,
      games: 37,
    },
    {
      name: "100HP Gaming",
      image: IMGS.provider6,
      games: 7,
    },
    {
      name: "BGaming",
      image: IMGS.provider7,
      games: 166,
    },
    {
      name: "Wazdan",
      image: IMGS.provider8,
      games: 199,
    },
  ];

  return (
    <main className="min-h-screen bg-tech-dark-blue">
      {/* Hero Banner Carousel - Full Width */}
      <div className="w-full mt-[100px]">
        <BannerSlider banners={banners} />
      </div>

      {/* Content Container */}
      <div className="container md:pt-10 mx-auto">
        <CategoryIcons />

        {/* Exclusive Games - Hiển thị khi category "Games" được chọn */}
        <CategorySection categoryLabel="Games">
          <ExclusiveGames games={exclusiveGames} />
        </CategorySection>

        {/* All Providers - Hiển thị khi category "Providers" được chọn */}
        <CategorySection categoryLabel="Providers">
          <ProvidersGrid providers={providers} />
        </CategorySection>
      </div>
    </main>
  );
}
