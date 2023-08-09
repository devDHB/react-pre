import { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import { boardData, columnData, cardData } from "../data.js";
import CreateBoard from "../components/CreateBoard.js";

const ColumnItem = (props) => {
  return columnData.map((column) => {
    if (column.boardId == props.boardId) {
      return (
        <div>
          <ul className="column">
            <li className="column-list">
              <h3>{column.name}</h3>
              <CardItem columnId={column.columnId} />
            </li>
          </ul>
          <button className="card-create-btn">카드추가</button>
        </div>
      );
    }
  });
};

const CardItem = (props) => {
  return cardData.map((card) => {
    if (card.columnId == props.columnId) {
      return (
        <ul className="card">
          <li className="card-list">
            <p>{card.description}</p>
          </li>
        </ul>
      );
    }
  });
};

const Board = () => {
  const { boardId } = useParams();

  const BoardList = () => {
    return (
      <div>
        <div>
          {boardId == null || boardId == 0 ? (
            <h1>보드 페이지입니다</h1>
          ) : (
            <h1>{boardData[boardId - 1].description}</h1>
          )}
          <div className="column-container">
            <ColumnItem boardId={boardId} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Navbar />
      <CreateBoard />
      <BoardList />
    </div>
  );
};

export default Board;
