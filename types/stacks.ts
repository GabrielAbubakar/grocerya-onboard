import { NavigatorScreenParams } from "@react-navigation/native";

export type RootStackParamList = {
  Index: undefined;
  DrawerGroup: NavigatorScreenParams<DrawerParamList>;
  AuthGroup: NavigatorScreenParams<AuthStackParamList>;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
  OTP: undefined;
  SelectCategory: undefined;
  SetLocation: undefined;
  EnableNotifications: undefined;
};

export type HomeTabParamList = {
  Home: undefined;
  Cart: undefined;
  Favorite: undefined;
  Profile: undefined;
};

export type DrawerParamList = {
  HomeTabGroup: NavigatorScreenParams<HomeTabParamList>;
  Cart: undefined;
  Favorite: undefined;
  Profile: undefined;
};
