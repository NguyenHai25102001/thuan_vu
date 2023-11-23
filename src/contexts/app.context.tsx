import React, { createContext, useState } from "react";
import {
  getAccessTokenFromLS,
  getListBabyFromLS,
  getProfileFromLS,
} from "../utils/auth";
import { IBaby, IUserBaby, User } from "../types/user.type";

interface AppContextType {
  profile: User | null;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  setProfile: React.Dispatch<React.SetStateAction<User | IUserBaby | null>>;
  setListBaby: React.Dispatch<React.SetStateAction<IBaby[] | null>>;
  listBaby: IBaby[];
  selectedBaby: IBaby | null;
  setSelectedBaby: React.Dispatch<React.SetStateAction<IBaby | null>>;
  phoneUser: string | null;
  setPhoneUser: React.Dispatch<React.SetStateAction<string | null>>;
}

const initialAppContext: AppContextType = {
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null,
  listBaby: getListBabyFromLS(),
  setListBaby: () => null,
  selectedBaby: null,
  setSelectedBaby: () => null,
  phoneUser: "",
  setPhoneUser: () => null,
};

export const AppContext = createContext<AppContextType>(initialAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    initialAppContext.isAuthenticated
  );

  const [profile, setProfile] = useState<User | null>(
    initialAppContext.profile
  );
  const [listBaby, setListBaby] = useState<IBaby[]>(initialAppContext.listBaby);
  const [selectedBaby, setSelectedBaby] = useState<IBaby | null>(
    initialAppContext.selectedBaby
  );
  const [phoneUser, setPhoneUser] = useState("");
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        setProfile,
        listBaby,
        setListBaby,
        selectedBaby,
        setSelectedBaby,
        phoneUser,
        setPhoneUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
