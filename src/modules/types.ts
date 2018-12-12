export interface RootState {
  loading: boolean;
  appName: string;
  appVersion: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface UserData {
  name: string;
  surname: string;
}

// export interface ActivityTypesComponents {
//   activity_types_components: string[];
// }
export type ActivityTypesComponents = string[];

export type ActivityType = Array<{
  id: number;
  type: string;
}>;

export interface ActivityTypeSelection {
  type: number;
  date: string;
}

export interface ActivitySelectedData {
  team: string;
  information: string;
}

export interface Activity {
  terms: boolean;
  personal_data: UserData;
  activity_type_selection: ActivityTypeSelection;
  activity_selected_data: ActivitySelectedData;
}
