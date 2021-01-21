export interface TableListItem {
  id: string;
  key: number;
  disabled?: boolean;
  href: string;
  avatar: string;
  name: string;
  owner: string;
  desc: string;
  callNo: number;
  status: number;
  updatedAt: Date;
  createdAt: Date;
  progress: number;
  processInstanceId: string;
  forward?: string;
  backward?: string;
}

export interface TableListPagination {
  total: number;
  pageSize: number;
  current: number;
}

export interface TableListData {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
}

export interface TaskListItem {
  id: string;
  name?: string;
}

export interface TaskNodeListParams {
  taskId: string;
  name?: string;
  pageSize?: number;
  currentPage?: number;
}

export interface TableListParams {
  status?: string;
  name?: string;
  desc?: string;
  key?: number;
  pageSize?: number;
  currentPage?: number;
  filter?: { [key: string]: any[] };
  sorter?: { [key: string]: any };
}

export interface TaskInfoParams {
  processInstanceId: string;
  processDefinitionId: string;
  taskId: string;
}


export interface TaskForwardParams {
  sourceTaskId: string;
  targetActId: string;
}


export interface TaskJumpParams {
  id: string;
  forward: string;
  backward: string;
}
