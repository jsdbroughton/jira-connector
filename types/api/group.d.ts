import { Callback } from "../callback";
import { AvatarUrls } from "./user";

export class Group {
  getMembers(
    opts: {
      groupName:string;
      includeInactiveUsers?: boolean;
      startAt?: number;
      maxResults?: number;
    },
    callback?: Callback
  ): Promise<UserDetailsPage>;
}

export interface UserDetailsPage {
  self: string;
  nextPage: string;
  maxResults: number;
  startAt: number;
  total: number;
  isLast: boolean;
  values: UserDetails[]
}

export interface UserDetails {
  self: string;
  name?: string;
  key?: string;
  accountId: string;
  emailAddress: string;
  avatarUrls: AvatarUrls;
  displayName: string;
  active: boolean;
  timeZone: string;
  accountType: string;
}
