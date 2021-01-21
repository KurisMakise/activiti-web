import React from 'react';
import {message, Modal} from 'antd';
import ProForm, {ProFormSelect, ProFormText, ProFormUploadButton} from '@ant-design/pro-form';

import {TableListItem, TaskJumpParams} from '../data.d';
import {childNode, jumpBackward, jumpForward, parentNode} from "@/pages/hisTask/service";

export interface FormValueType extends Partial<TableListItem> {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
}

export interface TaskFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  taskModalVisible: boolean;
  values: Partial<TableListItem>;
}


const handleJumpBackward = (form: TaskJumpParams) => {
  const hide = message.loading('正在退回');
  try {
    const result = jumpBackward({
      sourceTaskId: form.id,
      targetActId: form.backward,
    });
    hide();
    message.error(result);
    message.success('退回成功');
    return true;
  } catch (error) {
    hide();
    message.error(error);
    message.error('退回失败请重试！');
    return false;
  }
}

const handleJumpForward = (form: TaskJumpParams) => {
  jumpForward({
    sourceTaskId: form.id,
    targetActId: form.forward,
  });
};
const TaskForm: React.FC<TaskFormProps> = (props) => {
  const {taskModalVisible, onCancel, values, onSubmit,} = props;
  return (
    <Modal
      destroyOnClose
      title='流程任务'
      visible={taskModalVisible}
      onCancel={() => onCancel()}
      footer={null}
    >
      <ProForm
        initialValues={values}
        onFinish={onSubmit}
        submitter={{
          render: (props1) => {
            return [
              <button type="button" key="rest" onClick={() => props1.form?.resetFields()} className='ant-btn'>
                重置
              </button>,
              <button type="button" key="submit" onClick={() => props1.form?.submit?.()}
                      className="ant-btn ant-btn-primary">
                提交
              </button>,
              <button type="button" key="jumpForward" onClick={() => handleJumpForward(props1.form?.getFieldsValue())}
                      className='ant-btn'>
                任意提交
              </button>,
              <button type="button" key="jumpBackward" onClick={() => handleJumpBackward(props1.form?.getFieldsValue())}
                      className='ant-btn'>
                任意退回
              </button>,
            ];
          }
        }}
      >
        <ProFormText hidden name="id"/>
        <ProForm.Group>
          <ProFormText width="m" name="name" label="任务名称" tooltip="最长为 24 位" placeholder="请输入名称"/>
          <ProFormText width="m" name="taskDefinitionKey" label="任务定义" placeholder="请输入名称"/>
        </ProForm.Group>

        <ProFormText width="m" name="processInstanceId" label="流程实例id" tooltip="最长为 24 位" placeholder="请输入名称"/>
        <ProFormText width="m" name="processDefinitionId" label="流程定义id" tooltip="最长为 24 位" placeholder="请输入名称"/>

        <ProFormSelect
          options={[
            {
              value: 'CREATED',
              label: '新建',
            },
            {
              value: "unstated",
              label: "未启动",
            },
            {
              value: 'start',
              label: "启动中"
            },
            {
              value: 'processing',
              label: '执行中'
            },
          ]}
          width="m" name="status" label='状态'
        />
        <ProFormUploadButton
          extra="支持扩展名：.jpg .zip .doc .wps"
          label="倒签报备附件"
          name="file"
          title="上传文件"
        />

        <ProFormSelect
          request={() => childNode(values.id)}
          width="m" name="forward" label="提交节点"
        />
        <ProFormSelect
          request={() => parentNode(values.id)}
          width="m" name="backward" label="回退节点"
        />
      </ProForm>
    </Modal>
  );
};
export default TaskForm;
