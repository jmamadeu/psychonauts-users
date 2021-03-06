export type UserProperties = {
  _id: string;
  img: string;
  name: string;
  gender: string;
  psiPowers: Array<PSIPowersProperties>;
  isFavorite?: boolean;
};

export type PSIPowersProperties = Omit<UserProperties, "gender"> & {
  description: string;
};
