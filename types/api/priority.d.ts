import { Callback } from "../callback";

export interface Priority {
  self: string;
  statusColor: string;
  description: string;
  iconUrl: string;
  name: string;
  id: string;
  [x:string]: any;
}

export class Priority {
  getAllPriorities(
    opts?: never;
    callback?: Callback;
  ): Promise<Priority[]>;

  getPriority(
    opts: {
      priorityId: string;
    },
    callback? Callback
  ): Promise<Priority>;
}
