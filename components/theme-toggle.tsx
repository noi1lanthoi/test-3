"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Khi component được mount, cập nhật state
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Chỉ render component khi đã mount để tránh lỗi hydration
  if (!mounted) {
    return <div className="w-5 h-5" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "dark" : "light")}
      className="rounded-md p-2 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </button>
  );
}
