import { create } from "zustand";

const useStore = create((set) => ({
  selectedMonth: 3,

  setSelectedMonth: (selectedMonth) => set({ selectedMonth }),

  selectedPage: 1,

  setSelectedPage: (selectedPage) => set({ selectedPage }),

  transactions: [],
  setTransactions: (transactions) => set({ transactions }),
}));

export default useStore;
