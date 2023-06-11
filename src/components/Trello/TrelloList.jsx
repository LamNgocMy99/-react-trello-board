// import React from "react";
import TrelloItem from "./TrelloItem";
import { Card,Button,Tooltip, Popconfirm  } from 'antd';
import {PlusOutlined,DeleteOutlined } from '@ant-design/icons'; 


const TrelloList = ({openDialog }) => {
  // console.log("openDialog",openDialog)
    return (
        <Card className="cardList" title="List 1" 
              extra={
                <>
                <Tooltip placement="top" title="Add" >
                  <Button className ="buttonCard" onClick={()=>openDialog(true)}><PlusOutlined key='add'/></Button>
                </Tooltip>
                
                
                <Popconfirm
                  placement="top"
                  title="Delete the list"
                  description="Are you sure to delete this list?"
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Tooltip placement="top" title="Delete" >
                    <Button className= "buttonCard"><DeleteOutlined key='delete'/></Button>
                  </Tooltip>
                </Popconfirm>
                </>
              }>
          <TrelloItem openDialog = {openDialog} />
          <TrelloItem openDialog = {openDialog} />
          <TrelloItem openDialog = {openDialog} />
          <TrelloItem openDialog = {openDialog} />          
        </Card>
    );
}
 
export default TrelloList;