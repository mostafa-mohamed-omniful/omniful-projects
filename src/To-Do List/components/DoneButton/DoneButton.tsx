import "./DoneButton.css";

export function DoneButton({ deleteTask, index }: { deleteTask: (index: number) => void; index: number }) {
  return (
    <button className="done-button" onClick={() => deleteTask(index)}>
      ✔
    </button>
  );
}
