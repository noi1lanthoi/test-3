"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useCategories } from "@/contexts/CategoryContext";

export function CategoryIcons() {
  const { categories, isActive, toggleCategory } = useCategories();

  const desktopCategories = categories.filter(
    (cat) => cat.label.toLowerCase() !== "search"
  );

  const searchCategory = categories.find(
    (cat) => cat.label.toLowerCase() === "search"
  );
  const gamesCategory = categories.find(
    (cat) => cat.label.toLowerCase() === "games"
  );
  const providersCategory = categories.find(
    (cat) => cat.label.toLowerCase() === "providers"
  );

  const mobileCategories = [];

  if (searchCategory) {
    mobileCategories.push(searchCategory);
  }
  if (gamesCategory) mobileCategories.push(gamesCategory);
  if (providersCategory) mobileCategories.push(providersCategory);

  return (
    <>
      <div className="hidden md:grid md:grid-cols-4 lg:grid-cols-7 gap-2 mb-12">
        {desktopCategories.map((category, index) => {
          const Icon = category.icon;
          const active = isActive(categories.indexOf(category));

          return (
            <div
              key={index}
              className={cn(
                "hover:bg-tech-darker-blue border-blue-chip-io border rounded-[10px] p-4 flex items-center gap-3 justify-center transition-all cursor-pointer",
                active ? "bg-tech-darker-blue" : "bg-tech-dark-blue"
              )}
              onClick={() => toggleCategory(categories.indexOf(category))} // Sử dụng index từ mảng gốc
            >
              <Image src={Icon} alt={category.label} width={32} height={32} />
              <span className="text-white text-xs">{category.label}</span>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-1.5 py-6 px-4 md:hidden">
        {mobileCategories.map((category, index) => {
          const Icon = category.icon;
          const originalIndex = categories.indexOf(category);

          return (
            <div
              key={index}
              className={cn(
                "flex flex-1  items-center justify-center py-3 px-2 gap-2 bg-tech-darker-blue rounded-[10px] text-white",
                "transition-all hover:bg-tech-darker-blue/80",
                originalIndex >= 0 && isActive(originalIndex)
                  ? "bg-tech-darker-blue"
                  : "bg-tech-dark-blue"
              )}
              onClick={() =>
                originalIndex >= 0 ? toggleCategory(originalIndex) : null
              }
            >
              <Image src={Icon} alt={category.label} width={24} height={24} />
              <span className="text-xs mt-1">{category.label}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
