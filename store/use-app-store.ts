import { create } from "zustand";

interface AppState {
  isSidebarOpen: boolean;
  theme: "light" | "dark" | "system";
  toggleSidebar: () => void;
  setTheme: (theme: "light" | "dark" | "system") => void;
}

export const useAppStore = create<AppState>((set) => ({
  isSidebarOpen: false,
  theme: "system",
  toggleSidebar: () =>
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
  setTheme: (theme) => set({ theme }),
}));
