import "./AddButton.css";

export function AddButton({ addTask }: { addTask: () => void }) {
  return (
    <button className="add-button" onClick={addTask}>
      +
    </button>
  );
}
