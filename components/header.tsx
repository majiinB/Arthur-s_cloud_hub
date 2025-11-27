"use client";

import { useState, useEffect } from "react";
import { Cloud, Moon, Sun } from "lucide-react";

interface HeaderProps {
  currentPage: string | null;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains("dark");
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    if (!mounted) return;

    const newIsDark = !isDark;
    setIsDark(newIsDark);

    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return null;

  return (
    <header className="border-b border-border bg-card sticky top-0 z-50">
      <div className="max-w-full px-4 md:px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center gap-2 md:gap-3 cursor-pointer"
          onClick={() => onNavigate("")}
        >
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary flex items-center justify-center flex-shrink-0">
            <span className="text-primary-foreground font-bold text-sm md:text-lg">
              <Cloud />
            </span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg md:text-2xl font-bold text-foreground">
              Arthur's Cloud Hub
            </h1>
            <p className="text-xs md:text-sm text-muted-foreground">
              Assignments & Documentation
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-6">
          <nav className="flex items-center gap-3 md:gap-6">
            <button
              onClick={() => onNavigate("")}
              className={`text-xs md:text-sm font-medium transition-colors ${
                currentPage === ""
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </button>
            <button
              onClick={() => onNavigate("assignments")}
              className={`text-xs md:text-sm font-medium transition-colors ${
                currentPage === "assignments"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Assignments
            </button>
          </nav>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors flex-shrink-0"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="w-4 h-4 md:w-5 md:h-5 text-accent" />
            ) : (
              <Moon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
