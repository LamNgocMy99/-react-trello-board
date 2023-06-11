import React, {useState} from "react";
//component
import { Modal,Form,Input,Select,Space } from 'antd';
import TrelloList from "../components/Trello/TrelloList";
const TrelloBoard = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const { Option } = Select;
  function openDialog(isOpen = false){
    setDialogOpen(isOpen);
  }


  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!'
  };

  return ( 
    <div>
      <div className="header">
        <div className="logo"></div>
        <div className="avatar"></div>
      </div>
      <div className="main">
        <div className="content">
          <TrelloList openDialog = {openDialog} />
          <TrelloList openDialog = {openDialog}/>
          {/* <TrelloList /> */}
        </div>
        {/* Dialog Add */}
        <Modal
          title="Add"
          style={{ top: 100 }}
          open={dialogOpen}
          onOk={() => openDialog(false)}
          onCancel={() => openDialog(false)}
        >
           <Form
            {...layout}
            // name="nest-messages"
            // onFinish={onFinish}
            style={{ maxWidth: 600 }}
            validateMessages={validateMessages}
          >
            <Form.Item name="title" label="Title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name="description" label="Description" rules={[{ required: true }]} >
              <Input.TextArea />
            </Form.Item>

            <Form.Item name="member" label="Member" rules={[{ required: true }]}>
              <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                onChange={()=> {console.log("change status")}}
                optionLabelProp="label"
              >
                <Option value="1" label="DEF">
                  <Space>
                    ABC
                  </Space>
                </Option>
                <Option value="2" label="DEF">
                  <Space>
                    DEF
                  </Space>
                </Option>
              </Select>
            </Form.Item>

            <Form.Item name="status" label="Status" rules={[{ required: true }]}>
            <Select
              onChange={()=> {console.log("change status")}}
            >
              <Option value="1">New</Option>
              <Option value="2">In Process</Option>
              <Option value="3">Done</Option>
            </Select>
          </Form.Item>
          </Form>
        </Modal>



      </div>
    </div> 
  );
}
 
export default TrelloBoard;