import { create } from "zustand";
import { ContactState } from "./components/interfaces";

export const useStore = create<ContactState>()((set) => ({
  clientID: 0,
  addClientID: (id) => set({ clientID: id }),
}));

// export default useStore;
