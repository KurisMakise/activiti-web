import request from '@/utils/request';
import {TableListItem, TableListParams} from './data.d';

export async function queryRule(params?: TableListParams) {
  return request('workflow/process/instance', {
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

export async function suspendProcess(processInstanceId: string) {
  return request(`workflow/process/${processInstanceId}/suspend`, {
    method: 'post'
  })
}

export async function deleteProcess(processInstanceId: string) {
  return request(`workflow/process/${processInstanceId}`, {
    method: 'delete'
  })
}

export async function resumeProcess(processInstanceId: string) {
  return request(`workflow/process/${processInstanceId}/resume`, {
    method: 'post'
  })
}
