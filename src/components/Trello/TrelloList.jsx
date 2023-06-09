// import React from "react";
import TrelloItem from "./TrelloItem";
import { Card } from 'antd';
import {PlusOutlined,DeleteOutlined } from '@ant-design/icons'; 


const TrelloList = () => {
    return (
        <Card className="cardList" title="List 1" extra={<><button><PlusOutlined /> </button><button><DeleteOutlined/></button></>}>
          <TrelloItem />
          <TrelloItem />
          <TrelloItem />
          <TrelloItem />          
        </Card>
    );
}
 
export default TrelloList;