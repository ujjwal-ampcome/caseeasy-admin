import { UUID } from "crypto";
import { CSSProperties } from "react";

export interface ILoginForm {
  siteid: string;
  email: string;
  password: string;
}

export interface ICustomDropdown {
  name: string;
  subName: string;
  searchParam: boolean;
  addItem: boolean;
  item: string[];
  newItem: string;
  type: string;
  size: string;
  style: CSSProperties;
  icon: any;
  ghost: boolean;
}

export interface IPrimaryContactForm {
  activeTabKey: any;
  setActiveTabKey: any;
}
export interface ISpouseContactForm {
  clientid: any;
  setClientId: any;
}

export interface ContactState {
  clientID: any;
  addClientID: (id: any) => void;
}
