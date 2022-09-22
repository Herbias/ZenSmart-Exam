import { useState } from "react";
import CreateModal from "../components/CreateModal";
import { useModal } from "../components/Modal";
import TodoItem from "../components/TodoItem";

const Home = () => {
  const modal = useModal();
  const [todoList, setTodoList] = useState([]);
  const [taskName, setTaskName] = useState("");

  const markAsDone = (todoId) => {
    let task = todoList.find(({ id }) => id === todoId);
    task["status"] = "Done";

    setTodoList((todoList) => [...todoList]);
  };

  const createTask = () => {
    let tempTodoList = todoList;
    const newTask = { id: todoList.length + 1, name: taskName, status: null };
    tempTodoList.push(newTask);
    setTodoList(tempTodoList);
    setTaskName("");
    modal.onClose();
  };

  return (
    <>
      {todoList.length > 0 ? (
        todoList.map((props) => (
          <TodoItem key={props.id} {...props} {...{ markAsDone }} />
        ))
      ) : (
        <div className="text-center text-xl text-heading">
          There is no task on the list!
        </div>
      )}
      <button
        onClick={() => modal.show()}
        className="button button--default fixed bottom-6 right-6"
      >
        + Create task
      </button>
      <CreateModal {...modal} {...{ createTask, taskName, setTaskName }} />
    </>
  );
};

export default Home;
