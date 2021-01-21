import React from 'react';
import {Modal} from 'antd';

interface CreateFormProps {
  modalVisible: boolean;
  onCancel: () => void;
}

const CreateForm: React.FC<CreateFormProps> = (props) => {
  const {modalVisible, onCancel} = props;

  return (
    <Modal
      destroyOnClose
      title='流程图'
      visible={modalVisible}
      onCancel={() => onCancel()}
      footer={null}
    >
    </Modal>
  );
};

export default CreateForm;
