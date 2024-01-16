import { create } from "zustand";

interface ContactState {
  clientID: any;
  addClientID: (id: any) => void;
}
export const useStore = create<ContactState>()((set) => ({
  clientID: 0,
  addClientID: (id) => set({ clientID: id }),
}));

// export default useStore;
