import { create } from "zustand";
import {
  IContactState,
  IFilterStore,
  ISortStore,
} from "./components/interfaces";

export const useStore = create<IContactState>()((set) => ({
  clientID: 0,
  addClientID: (id) => set({ clientID: id }),
}));

export const filterStore = create<IFilterStore>()((set) => ({
  clientname: "",
  agerange: "",
  noc: "",
  maritalstatus: "",
  contacttype: "",
  residence: "",
  addClientName: (value) => set({ clientname: value }),
  addAgeRange: (value) => set({ agerange: value }),
  addNoc: (value) => set({ noc: value }),
  addMaritalStatus: (value) => set({ maritalstatus: value }),
  addContactType: (value) => set({ contacttype: value }),
  addResidence: (value) =>
    set({
      residence: value,
    }),
}));

export const sortStore = create<ISortStore>()((set) => ({
  firstname: "",
  createdat: "",
  updatedat: "",
  addFirstName: (value) =>
    set({
      firstname: value,
    }),
  addCreatedAt: (value) =>
    set({
      createdat: value,
    }),
  addUpdatedAt: (value) =>
    set({
      updatedat: value,
    }),
}));
