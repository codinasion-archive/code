import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

import { useTheme } from "next-themes";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center rounded-md mr-4 md:mr-2"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <span className="sr-only">Theme Toggle Button</span>
      {theme === "light" ? (
        <MoonIcon className="h-4 w-4" aria-hidden="true" />
      ) : (
        <SunIcon className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
}
