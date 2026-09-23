import "./App.css";
import Task from "./components/Task";
import React, { useState } from "react";
function App() {
  const [taskState, setTaskState] = useState({
    tasks: [
      {
        id: 1,
        title: "Dishes",
        description: "Empty dishwasher",
        deadline: "Today",
        priority: "high",
      },
      {
        id: 2,
        title: "Laundry",
        description: "Fold clothes and put away",
        deadline: "Tomorrow",
        priority: "medium",
      },
      { id: 3, title: "Tidy up", deadline: "Today", priority: "low" },
    ],
  });

  return (
    <div className="container">
      <h1>Tasky</h1>

      {taskState.tasks.map((task, index) => (
        <Task
          key={task.id}
          title={task.title}
          deadline={task.deadline}
          description={task.description}
          priority={task.priority}
        />
      ))}
    </div>
  );
}

export default App;
