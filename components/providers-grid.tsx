"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Grid3X3 } from "@/assets/icons";

interface Provider {
  name: string;
  image: string;
  games: number;
}

interface ProvidersGridProps {
  providers: Provider[];
}

export function ProvidersGrid({ providers }: ProvidersGridProps) {
  return (
    <div className="mb-3 md:mb-10">
      <div className="flex justify-between items-center md:mb-4 px-4 md:px-0">
        <h2 className="text-white text-[14px] md:text-[32px] font-medium uppercase md:capitalize">
          All Providers
        </h2>
        <Button variant="ghost" size="sm" className="text-white p-0 md:p-2">
          <span className="hidden md:inline mr-2">SEE ALL</span>
          <Grid3X3 className="h-5 w-5" />
        </Button>
      </div>
      <div className="flex overflow-x-auto justify-start md:justify-center py-3 md:py-4 px-4 md:px-0 gap-3 md:gap-4 hide-scrollbar">
        {providers.map((provider, index) => (
          <div
            key={index + 3}
            className="flex bg-tech-darker-blue rounded-[8px] flex-col items-center justify-center w-[120px] min-w-[120px] md:w-[156px] md:min-w-[156px] h-[122px] cursor-pointer"
          >
            <div className="flex items-center justify-center w-full h-[68px]">
              <Image src={provider.image} alt={provider.name} />
            </div>
            <div className="flex flex-col w-full items-center justify-center gap-1  h-[54px] bg-blue-chip-io rounded-b-[8px]">
              <span className="text-white text-[13px] underline">
                {provider.name}
              </span>
              <span className="text-nepal text-[11px] underline">
                {provider.games} games
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
