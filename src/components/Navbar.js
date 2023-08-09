const Navbar = () => {
  function modalCreateBoard() {
    document.querySelector(".create-board-modal").classList.toggle = "show";
  }
  function modalMyBoard() {
    document.querySelector(".my-board-modal").classList.toggle = "show";
  }

  return (
    <nav className="nav-bar">
      <ul className="menu">
        <li className="menu-list">
          <button onClick={modalCreateBoard}>보드 생성</button>
        </li>
        <li className="menu-list">
          <button onClick={modalMyBoard}>내 보드</button>
        </li>
        <li className="menu-list">
          <button>팀원 목록</button>
        </li>
        <li className="menu-list">
          <button>초대</button>
        </li>
        <li className="menu-list">
          <button>내 정보</button>
        </li>
        <li className="menu-list">
          <button>로그 아웃</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
