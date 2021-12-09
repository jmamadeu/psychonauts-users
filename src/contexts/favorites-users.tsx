import { createContext, useContext, useState } from "react";
import { UserProperties } from "../models/user";

type UserId = UserProperties["_id"];

type FavoritesUserContextProps = {
  favoriteIds: Array<UserId>;
  favoriteClickHandler: (id: UserId) => void;
};

const FavoritesUserContext = createContext<FavoritesUserContextProps>(
  {} as FavoritesUserContextProps
);

const FAVORITES_STORAGE_KEY = "@usersFavorites";

function getFromLocalStorage() {
  const favoritesIds = localStorage.getItem(FAVORITES_STORAGE_KEY);
  if (!favoritesIds) return [];

  return JSON.parse(favoritesIds) as Array<UserId>;
}

const setToLocalStorage = (ids: Array<UserId>) =>
  localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(ids));

export const FavoritesUserProvider: React.FC = ({ children }) => {
  const [favoriteIds, setFavoritesIds] = useState<string[]>(() => {
    return getFromLocalStorage();
  });

  const favoriteClickHandler = (id: UserId) => {
    setFavoritesIds((currentIds) => {
      let ids;

      ids = currentIds.find((currentId) => currentId === id)
        ? currentIds.filter((currentId) => id !== currentId)
        : [...currentIds, id];

      setToLocalStorage(ids);

      return ids;
    });
  };

  return (
    <FavoritesUserContext.Provider
      value={{ favoriteIds, favoriteClickHandler }}
    >
      {children}
    </FavoritesUserContext.Provider>
  );
};

export const useFavoriteUserIds = () => {
  const favoriteContext = useContext(FavoritesUserContext);

  return favoriteContext;
};
