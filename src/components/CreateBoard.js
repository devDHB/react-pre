const CreateBoard = () => {
  return (
    <div className="create-board-modal">
      <div>
        <form action="">
          <legend>보드 생성</legend>
          <label htmlFor="">내용</label>
          <input type="text" placeholder="Description" />
          <label htmlFor="">색상</label>
          <input type="color" />
        </form>
      </div>
    </div>
  );
};

export default CreateBoard;
