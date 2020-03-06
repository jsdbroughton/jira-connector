import { Callback } from "../callback";
import { PageBeanVersion } from "../models";
import { AvatarUrls } from "./user";

export class Project {
  getAllProjects(
    opts?: {
      expand?: string;
      recent?: number;
      properties?: string[];
      apiVersion?: string | number | 2 | 3;
    },
    callback?: Callback
  ): Promise<ProjectInfo[]>;

  updateProject(
    opts: {
      projectIdOrKey: string | number;
      expand?: string;
      key?: string;
      name?: string;
      projectTypeKey?: string;
      projectTemplateKey?: string;
      description?: string;
      lead?: string;
      leadAccountId?: string;
      url?: string;
      assigneeType?: string;
      avatarId?: number;
      issueSecurityScheme?: number;
      permissionScheme?: number;
      notificationScheme?: number;
      categoryId?: number;
    },
    callback?: Callback
  ): Promise<any>;

  deleteProject(
    opts: { projectIdOrKey: string | number },
    callback?: Callback
  ): Promise<any>;

  createProject( opts?: any, callback?: Callback ): Promise<any>;

  getProjectProperties( opts: any, callback?: Callback ): Promise<any>;

  getProject( opts: any, callback?: Callback ): Promise<any>;

  getComponents( opts: any, callback?: Callback ): Promise<any>;

  getStatuses( opts: any, callback?: Callback ): Promise<any>;

  getVersions( opts: any, callback?: Callback ): Promise<any>;

  getVersionsPaginated( opts: {
    projectIdOrKey: string;
    startAt?: number;
    maxResults?: number;
    orderBy?: string;
    query?: string;
    status?: string;
    expand?: any[];
  }, callback?: Callback ): Promise<PageBeanVersion>;

  getRoles( opts: { projectIdOrKey: string | number}, callback?: Callback ): Promise<ProjectRoleMap>;

  getRole( opts: {
    projectIdOrKey: string | number;
    roleId: number;
  }, callback?: Callback ): Promise<ProjectRole>;

  getRoleDetails( opts: {
    projectIdOrKey: string | number;
    currentMember?: boolean;
    excludeConnectAddons?: boolean;
  }, callback?: Callback ): Promise<ProjectRole[]>;

  updateRole( opts: any, callback?: Callback ): Promise<any>;

  addToRole( opts: any, callback?: Callback ): Promise<any>;
}

export interface UpdatedProjectCategory {
  self: string;
  id: string;
  description: string;
  name: string;
}
export interface ProjectForScope {
  self: string;
  id: string;
  key: string;
  name: string;
  projectTypeKey: string;
  simplified: boolean;
  avatarUrls: AvatarUrls;
  projectCategory: UpdatedProjectCategory;
}
export interface Scope {
  type: string;
  project: ProjectForScope;
}

export interface ProjectRoleUser {
  accountId: string;
}

export interface ProjectRoleGroup {
  displayName: string;
  name: string;
}
export interface RoleActor {
  id: number;
  displayName: string;
  type: string;
  name: string;
  avatarUrl: string;
  actorUser?: ProjectRoleUser;
  actorGroup?: ProjectRoleGroup;
}
export interface ProjectRole {
  self: string;
  name: string;
  id: number;
  description: string;
  actors: RoleActor[];
  scope: Scope;
  admin: boolean;
  default: boolean;
}

export interface ProjectRoleMap {
  [name: string]: {uri: string};
}

export interface ProjectInfo {
  expand: string;
  self: string;
  id: string;
  key: string;
  description: string;
  lead: any; //User;
  components: any[]; //Component[];
  issueTypes: any; //IssueTypeDetails[];
  url: string;
  email: string;
  assigneeType: string;
  versions: any[]; //Version[];
  name: string;
  roles: object;
  avatarUrls: AvatarUrls;
  projectCategory: any; //ProjectCategory;
  projectTypeKey: string;
  simplified: boolean;
  style: string;
  favourite: boolean;
  isPrivate: boolean;
  issueTypeHierachy: any; //Hierarchy;
  permissions: any; //ProjectPermissions;
  properties: object;
  uuid: string;
  insight: any; //ProjectInsight;
  deleted: boolean;
  retentionTillDate: string;
  deletedDate: string;
  deletedBy: any; //User;
  archived: boolean;
  archivedDate: string;
  archivedBy: any; //User;
}
