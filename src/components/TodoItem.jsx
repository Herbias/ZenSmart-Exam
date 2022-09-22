const TodoItem = ({ id, name, status, markAsDone }) => {
  return (
    <div
      {...{ id }}
      className="relative h-auto cursor-pointer border px-4 py-2 even:bg-blue-0"
      onClick={() => markAsDone(id)}
    >
      {name}
      {status && <div className="done bg-green-2 text-white">{status}</div>}
    </div>
  );
};

export default TodoItem;
