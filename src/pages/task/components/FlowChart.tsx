import React from 'react';
import {Modal} from 'antd';

import {TableListItem} from '../data.d';

export interface FormValueType extends Partial<TableListItem> {
  target?: string;
  template?: string;
  type?: string;
  time?: string;
  frequency?: string;
}

export interface UpdateFormProps {
  onCancel: (flag?: boolean, formVals?: FormValueType) => void;
  onSubmit: (values: FormValueType) => Promise<void>;
  updateModalVisible: boolean;
  values: Partial<TableListItem>;
}

const FlowChart: React.FC<UpdateFormProps> = (props) => {
  const {updateModalVisible, onCancel, values} = props;


  return (
    <Modal
      destroyOnClose
      title='流程图'
      visible={updateModalVisible}
      onCancel={() => onCancel()}
      footer={null}
      width={1066}
    >
      <img src={`http://localhost:8001/chart/process/${values.processInstanceId}`} alt=""/>
    </Modal>
  );
};

export default FlowChart;
