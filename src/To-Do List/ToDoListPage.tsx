import { useState } from "react";
import "./ToDoListPage.css";
import { AddButton } from "./components/AddButton/AddButton.tsx";
import { InputBox } from "./components/InputBox/InputBox.tsx";
import { List } from "./components/List/List.tsx";
import { Title } from "./components/Title/Title.tsx";
import { DoneTasks } from "./components/DoneTasks/DoneTasks.tsx";
import { DoneList } from "./components/DoneList/DoneList.tsx";
import { Link } from "react-router-dom";

export default function ToDoListPage() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [input, setInput] = useState<string>("");
  const [doneTasks, setDoneTasks] = useState<string[]>([]);

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const deleteTask = (deleted: number) => {
    setDoneTasks([...doneTasks, tasks[deleted]]);
    setTasks(tasks.filter((_, index) => index !== deleted));
  };

  return (
    <> 
    <div>
      <Link to="/">Home</Link>
    </div>
    <div className="todo-list-container">
      <Title />
      <div className="input-terminal">
        <InputBox input={input} setInput={setInput} />
        <AddButton addTask={addTask} />
      </div>
      <List tasks={tasks} deleteTask={deleteTask} />
      <DoneTasks setDoneTasks={setDoneTasks} />
      <DoneList doneTasks={doneTasks} />
    </div>
    </>

  );
}
