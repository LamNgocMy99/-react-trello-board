/* eslint-disable react/jsx-key */
// import React from "react";
import { EditOutlined, DeleteOutlined, FileTextOutlined, UserOutlined, AntDesignOutlined} from '@ant-design/icons';
import {Avatar, Tooltip, Card,Popconfirm,Modal} from 'antd';
const { Meta } = Card;
const TrelloItem = ({openDialog}) => {

  const info = () => {
    Modal.info({
      title: 'Card Detail',
      content: (
        <div>
          <div>
            <h4>Title</h4>
            <div>This is title</div>
          </div>
          <div>
            <h4>Description</h4>
            <div>This is description</div>
          </div>
          <div>
            <h4>Member</h4>
            <div>...</div>
          </div>
          <div>
            <h4>Status</h4>
            <div>New</div>
          </div>
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <>
    <Card
      style={{ width: 290, margin: 10 }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <Tooltip placement='top' title='View'>
          <FileTextOutlined key='view' onClick={info}/>
        </Tooltip>,
        <Tooltip placement='top' title='Edit'>
          <EditOutlined key='edit' onClick={()=>openDialog(true)}/>
        </Tooltip>,
        
        <Popconfirm
          placement="top"
          title="Delete the list"
          description="Are you sure to delete this list?"
          onConfirm={confirm}
          okText="Yes"
          cancelText="No"
        >
          <Tooltip placement='top' title='Delete'>
            <DeleteOutlined key='delete' />
          </Tooltip>
        </Popconfirm>
        
      ]}
    >
      <Meta style={{padding: 10}}
        title="Learn JS"
        description="This is the description"
      />
        <Avatar.Group
        className='avatarGroup'
          maxCount={2}
          maxPopoverTrigger="click"
          size="large"
          maxStyle={{
            color: '#f56a00',
            backgroundColor: '#fde3cf',
            cursor: 'pointer',
            display: 'flex'
          }}
        >
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          <Avatar
            style={{
              backgroundColor: '#f56a00',
            }}
          >
            K
          </Avatar>
          <Tooltip title="Ant User" placement="top">
            <Avatar
              style={{
                backgroundColor: '#87d068',
              }}
              icon={<UserOutlined />}
            />
          </Tooltip>
          <Avatar
            style={{
              backgroundColor: '#1677ff',
            }}
            icon={<AntDesignOutlined />}
          />
        </Avatar.Group>
    </Card>
    </>
    );
}
 
export default TrelloItem;