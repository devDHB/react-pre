import "./App.css";
import React, { useState, useEffect } from "react";
// 라우터
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Board from "./routes/Board";
import LoginForm from "./components/Login";

// 타이틀 컴포넌트
const Title = () => {
  return <h2 className="title">5조5시조 - 칸반보드</h2>;
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="bg-img">
              <Title />
              <LoginForm />
            </div>
          }
        />
        <Route path="/board" element={<Board />}>
          <Route path=":boardId" element={<Board />} />
        </Route>

        <Route path="*" element={<div>존재하지 않는 페이지 주소입니다</div>} />
      </Routes>
    </div>
  );
}

export default App;
