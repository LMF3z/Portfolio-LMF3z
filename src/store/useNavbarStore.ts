import { create } from 'zustand';

type NavbarStore = {
  isNavbarOpen: boolean;
  toggleIsNavbarOpen: () => void;
};

export const useNavbarStore = create<NavbarStore>((set, get) => ({
  isNavbarOpen: false,
  toggleIsNavbarOpen: () => set({ isNavbarOpen: !get().isNavbarOpen }),
}));
