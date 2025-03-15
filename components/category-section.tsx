"use client";

import { useCategories } from "@/contexts/CategoryContext";
import { ReactNode } from "react";

interface CategorySectionProps {
  categoryLabel: string;
  children: ReactNode;
}

export function CategorySection({
  categoryLabel,
  children,
}: CategorySectionProps) {
  const { getActiveCategoryLabels } = useCategories();
  const activeCategories = getActiveCategoryLabels();
  const isVisible = activeCategories.includes(categoryLabel);

  if (!isVisible) return null;

  return <>{children}</>;
}
