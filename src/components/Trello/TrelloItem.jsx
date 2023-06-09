// import React from "react";
import { EditOutlined, DeleteOutlined, FileTextOutlined, UserOutlined, AntDesignOutlined} from '@ant-design/icons';
import {Avatar, Tooltip, Card} from 'antd';
const { Meta } = Card;
const TrelloItem = () => {
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
        <FileTextOutlined key="view" />,
        <EditOutlined key="edit" />,
        <DeleteOutlined key="ellipsis" />,
      ]}
    >
      <Meta style={{padding: 10}}
        title="Learn JS"
        description="This is the description"
      />
        <Avatar.Group
          maxCount={2}
          maxPopoverTrigger="click"
          size="large"
          maxStyle={{
            color: '#f56a00',
            backgroundColor: '#fde3cf',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'flex-end'
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