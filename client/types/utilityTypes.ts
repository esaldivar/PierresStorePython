export interface accountInfoType {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  password: string;
}

export interface loginInfoType {
  emailAddress: string;
  password: string;
}

export interface categoryImages {
  [index: string]: string;
  cooking: string;
  fertilizer: string;
  flowers: string;
  fruit: string;
  grains: string;
  miscellaneous: string;
  'plant hormones': string;
  seeds: string;
  storage: string;
  trees: string;
  vegetables: string;
}

export interface seasonImages {
  [index: string]: string;
  spring: string;
  summer: string;
  fall: string;
  winter: string;
}

export interface seasonalDetails {
  [index: string]: string | string[];
  tree: string;
  avatar: string;
  article: string;
  festivals: string[];
}

export interface seasonInfo {
  [index: string]: seasonalDetails;
}

export interface seasonProp {
  currentSeason?: string;
}

export interface toggleFav {
  toggle: boolean;
  product: string;
}
