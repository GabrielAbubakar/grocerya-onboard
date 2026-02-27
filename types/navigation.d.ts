import {
    AuthStackParamList,
    HomeTabParamList,
    RootStackParamList,
} from "./stacks";

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList, AuthStackParamList, HomeTabParamList {}
  }
}
