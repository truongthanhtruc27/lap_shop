import { create } from 'zustand'

type Store = {
  count: number;
  countQuantityCart: number;
  inc: () => void;
  incQuantityCart: () => void;
}

export const useStore = create<Store>()((set) => ({
  count: 100,
  countQuantityCart: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
  incQuantityCart: () => set((state) => ({ countQuantityCart: state.countQuantityCart + 1 })),

}))