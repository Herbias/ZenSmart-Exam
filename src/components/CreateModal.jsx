import Modal from "./Modal";

const CreateModal = ({ onClose, open, createTask, taskName, setTaskName }) => {
  return (
    <Modal {...{ open }}>
      <div className="mx-auto mt-48 h-auto w-64 space-y-2 rounded border bg-white md:w-96">
        <div className="flex items-center justify-between border-b-2 p-2">
          Create new task <button onClick={() => onClose()}>&times;</button>
        </div>
        <div>
          <input
            className="h-auto w-full p-2 outline-none focus:border"
            type="text"
            name="task"
            placeholder="Task name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <button
          className="button button--default mx-auto w-full text-center"
          disabled={!taskName && true}
          onClick={() => createTask(taskName)}
        >
          Ok
        </button>
      </div>
    </Modal>
  );
};

export default CreateModal;
