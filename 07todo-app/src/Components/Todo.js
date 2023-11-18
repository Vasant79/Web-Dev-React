import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleClick() {
    setTaskList([...taskList, task]);
    setTask("");
  }

  const renderTaskList = taskList.map((eachTask) => {
    return (
      <div key={Math.random() * 100}>
        {eachTask}
        <br />
      </div>
    );
  });

  return (
    <div>
      {/* take task input from user */}
      <label>Add Task :</label>
      <input placeholder="task...." value={task} onChange={handleChange} />

      <button onClick={handleClick}>Add Task</button>
      {/* display those inputs */}

      {renderTaskList}
    </div>
  );
}

export default Todo;
