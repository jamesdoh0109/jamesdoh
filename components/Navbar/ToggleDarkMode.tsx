"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ToggleDarkMode() {
  const [mounted, setMounted] = useState(false);

  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <rect width="24" height="24" fill="none" />
      </svg>
    );
  }

  if (resolvedTheme === "dark") {
    return <Sun className="cursor-pointer" onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return <Moon className="cursor-pointer" onClick={() => setTheme("dark")} />;
  }
}
