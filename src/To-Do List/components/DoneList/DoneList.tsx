import "./DoneList.css";

export function DoneList({ doneTasks }: { doneTasks: string[] }) {
  return (
    <ul className="done-list">
      <i>
        {doneTasks.map((task: string, index: number) => (
          <li key={index}>{task}</li>
        ))}
      </i>
    </ul>
  );
}
