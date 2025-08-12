import { DoneButton } from "../DoneButton/DoneButton.tsx";
import "./List.css";

export function List({ tasks, deleteTask }: { tasks: string[]; deleteTask: (index: number) => void }) {
  return (
    <ul>
      {tasks.map((task: string, index: number) => (
        <li className="list" key={index}>
          {task} <DoneButton deleteTask={deleteTask} index={index} />
        </li>
      ))}
    </ul>
  );
}
