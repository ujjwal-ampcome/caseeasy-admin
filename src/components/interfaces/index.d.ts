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

export interface IUploadDetails {
  title: string;
  info: string;
  size: string;
  btnName: string;
}
export interface IContactState {
  clientID: any;
  addClientID: (id: any) => void;
}

export interface IFilterStore {
  clientname: string;
  agerange: string;
  noc: string;
  maritalstatus: string;
  contacttype: string;
  residence: string;
  addClientName: (value: string) => void;
  addAgeRange: (value: string) => void;
  addNoc: (value: string) => void;
  addMaritalStatus: (value: string) => void;
  addContactType: (value: string) => void;
  addResidence: (value: string) => void;
}

export interface ISortStore {
  firstname: string;
  createdat: string;
  updatedat: string;
  addFirstName: (value: string) => void;
  addCreatedAt: (value: string) => void;
  addUpdatedAt: (value: string) => void;
}

export interface IPersonalContact {
  id: UUID;
  unique_client_identifier: string;
  title: string;
  passport_number: string;
  first_name: string;
  last_name: string;
  job_title: string;
  marital_status: string;
  date_of_birth: string;
  country_of_residence: string;
  countries_of_citizenship: jsonb;
  login_email: string;
  phone_number: string;
  alternative_email: jsonb;
  alternative_phone_number: jsonb;
  phone_number_type: string;
  profile_photo: string;
  address_type: string;
  apartment: string;
  city: string;
  country: string;
  postal_code: string;
  street_name: string;
  street_number: string;
  alternative_address: jsonb;
  primary_email: string;
  created_at: Date;
  updated_at: Date;
}

export interface ISpouseContact {
  id: UUID;
  contact_id: UUID;
  unique_client_identifier: string;
  title: string;
  passport_number: string;
  first_name: string;
  last_name: string;
  job_title: string;
  marital_status: string;
  date_of_birth: string;
  country_of_residence: string;
  countries_of_citizenship: jsonb;
  login_email: string;
  phone_number: string;
  created_at: Date;
  updated_at: Date;
}
