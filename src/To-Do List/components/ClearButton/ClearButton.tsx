import "./ClearButton.css";

export function ClearButton({ setDoneTasks }: { setDoneTasks: (tasks: string[]) => void }) {
  return (
    <button className="clear-button" onClick={() => setDoneTasks([])}>
      CLEAR
    </button>
  );
}
