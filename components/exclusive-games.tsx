"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Grid3X3, HotIcon, NewIcon } from "@/assets/icons";
import { StaticImageData } from "next/image";

interface Game {
  image: StaticImageData;
  status?: string;
  category?: string;
  name?: string;
  prize?: string;
  provider?: string;
}

interface ExclusiveGamesProps {
  games: Game[];
}

export function ExclusiveGames({ games }: ExclusiveGamesProps) {
  const renderIcon = (status: string) => {
    switch (status) {
      case "HOT":
        return <HotIcon />;
      case "NEW":
        return <NewIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="mb-3 md:mb-10">
      <div className="flex justify-between items-center md:mb-4 px-4 md:px-0">
        <h2 className="text-white text-[14px] md:text-[32px] font-medium uppercase md:capitalize">
          Exclusive Games
        </h2>
        <Button variant="ghost" size="sm" className="text-white p-0 md:p-2">
          <span className="hidden md:inline mr-2">SEE ALL</span>
          <Grid3X3 className="h-5 w-5" />
        </Button>
      </div>

      {/* Sử dụng flex với overflow-x-auto để dàn layout từ trái sang phải và scroll ngang */}
      <div className="flex overflow-x-auto py-3 md:py-4 px-4 md:px-0 gap-3 md:gap-4 snap-x snap-mandatory hide-scrollbar">
        {games.map((game, index) => (
          <div
            key={index}
            className="game-card flex-shrink-0 flex-grow-0 md:w-[156px] md:min-w-[156px] w-[120px] min-w-[120px] h-[160px] md:h-[210px] snap-start overflow-visible rounded-[8px]"
          >
            <div className="absolute top-[15px] left-[-3px]">
              {renderIcon(game.status || "")}
            </div>

            <Image
              src={game.image}
              alt={game.name || `Game ${index + 1}`}
              className="w-full h-full object-cover rounded-[8px]"
            />

            {game.category && (
              <div className="absolute bottom-1 left-0 right-0 text-center">
                <span className="text-[8px] text-white  px-1 py-0.5  uppercase">
                  {game.category}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
