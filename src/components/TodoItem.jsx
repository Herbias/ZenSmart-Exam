const TodoItem = ({ id, name, status }) => (
  <div {...{ id }} className="relative h-auto px-4 py-2 even:bg-blue-0">
    {name}
    {status && <div className="done bg-green-2 text-white">{status}</div>}
  </div>
);

export default TodoItem;
