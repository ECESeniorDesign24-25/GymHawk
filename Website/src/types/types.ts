import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ReactNode } from "react";

// Navigation parameters for the app
export type RootStackParamList = {
  SignIn: undefined;
  Home: undefined;
  MemberPage: { name: string };
  SendMessageForm: { name: string; email: string; number: string };
};

// Navigation props for the app
export type NavigationProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;

//////////////////////////////////////// Authentication ////////////////////////////////////////

// Authentication interface
export type AuthenticationContextType = {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
};

// parameters for the provider
export type AuthenticationProviderProps = {
  children: ReactNode;
};
