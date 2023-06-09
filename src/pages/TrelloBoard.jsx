// import React from "react";

//component
import TrelloList from "../components/Trello/TrelloList";
const TrelloBoard = () => {
  return ( 
    <div>
      <div className="header">
        <div className="logo"></div>
        <div className="avatar"></div>
      </div>
      <div className="main">
        <div className="content">
          <TrelloList />
          <TrelloList />
          {/* <TrelloList /> */}
        </div>        
      </div>
    </div> 
  );
}
 
export default TrelloBoard;