import { create } from 'zustand';

type CurrentSectionSelected = {
  currentSection: string;
  setCurrentSection: (section: string) => void;
};

export const useCurrentSectionSelectedStore = create<CurrentSectionSelected>(
  (set) => ({
    currentSection: '',
    setCurrentSection: (c: string) => set({ currentSection: c }),
  })
);
