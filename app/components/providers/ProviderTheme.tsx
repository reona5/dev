"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

export const ProviderTheme = (({ children, ...props }) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}) satisfies React.FC<ThemeProviderProps>;
