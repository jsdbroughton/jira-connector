import { Callback } from "../callback";

export class Priority {
  getAllPriorities(
    opts?: never;
    callback?: Callback;
  ): Promise<IssuePriority[]>;

  getPriority(
    opts: {
      priorityId: string;
    },
    callback? Callback
  ): Promise<IssuePriority>;
}

export interface IssuePriority {
  self: string;
  statusColor: string;
  description: string;
  iconUrl: string;
  name: string;
  id: string;
  [x:string]: any;
}
