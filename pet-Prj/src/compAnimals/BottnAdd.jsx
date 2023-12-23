// eslint-disable-next-line react/prop-types
export default function BottnAdd({ addImage, setImage, inputRef, addTodo }) {
  return (
    <div className="d-flex justify-content-center row">
      <button onClick={addImage}>
        <input
          style={{ display: "none" }}
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
          type="file"
          ref={inputRef}
        />
        Your Image
      </button>
      <button onClick={addTodo}>Add all</button>
    </div>
  );
}
