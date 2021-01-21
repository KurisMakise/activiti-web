import request from '@/utils/request';
import {TableListItem, TableListParams, TaskForwardParams, TaskInfoParams} from './data.d';

export async function queryRule(params?: TableListParams) {
  return request('workflow/task/list', {
    params,
  });
}

export async function removeRule(params: { key: number[] }) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListItem) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}

export async function queryTask(params?: TaskInfoParams) {
  return request('workflow/task/info', {
    params,
  });
}

export async function childNode(taskId: string | undefined) {
  return request(`workflow/task/advanced/${taskId}/childNode`, {
    method: 'get',
  });
}

export async function parentNode(taskId: string | undefined) {
  return request(`workflow/task/advanced/${taskId}/parentNode`, {
    method: 'get',
  });
}

export function jumpForward(params: TaskForwardParams) {
  return request('workflow/task/advanced/jumpForward', {
    method: 'post',
    params,
    data: params
  });
}

export function jumpBackward(params: TaskForwardParams) {
  return request('workflow/task/advanced/jumpBackward', {
    method: 'post',
    params,
  });
}


