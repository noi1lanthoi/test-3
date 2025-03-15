"use client";

import { IMGS } from "@/assets/imgs";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  ReactNode,
} from "react";

export interface Category {
  icon: string;
  label: string;
}

interface CategoryContextType {
  categories: Category[];
  activeIndices: number[];
  toggleCategory: (index: number) => void;
  isActive: (index: number) => boolean;
  getActiveCategoryLabels: () => string[];
}

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export function useCategories() {
  const context = useContext(CategoryContext);
  if (context === undefined) {
    throw new Error("useCategories must be used within a CategoryProvider");
  }
  return context;
}

interface CategoryProviderProps {
  children: ReactNode;
}

export function CategoryProvider({ children }: CategoryProviderProps) {
  const categories = useMemo(
    () => [
      { icon: IMGS.diamond, label: "Diamond mine" },
      { icon: IMGS.vip, label: "VIP" },
      { icon: IMGS.promotion, label: "Promotion" },
      { icon: IMGS.hotMatch, label: "Hot Match" },
      { icon: IMGS.p2p, label: "P2P Transaction" },
      { icon: IMGS.search, label: "Search" },
      { icon: IMGS.games, label: "Games" },
      { icon: IMGS.provider, label: "Providers" },
    ],
    []
  );

  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  useEffect(() => {
    const gamesIndex = categories.findIndex((cat) => cat.label === "Games");
    const providersIndex = categories.findIndex(
      (cat) => cat.label === "Providers"
    );
    const defaultActive = [gamesIndex, providersIndex].filter(
      (index) => index !== -1
    );
    setActiveIndices(defaultActive);
  }, [categories]);

  const toggleCategory = (index: number) => {
    setActiveIndices((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      }
      return [...prev, index];
    });
  };

  const isActive = (index: number) => activeIndices.includes(index);

  const getActiveCategoryLabels = () => {
    return activeIndices.map((index) => categories[index].label);
  };

  const value = {
    categories,
    activeIndices,
    toggleCategory,
    isActive,
    getActiveCategoryLabels,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
