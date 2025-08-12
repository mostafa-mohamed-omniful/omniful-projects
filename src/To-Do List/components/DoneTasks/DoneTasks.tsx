import "./DoneTasks.css";
import { ClearButton } from "../ClearButton/ClearButton.tsx";

export function DoneTasks({ setDoneTasks }: { setDoneTasks: (tasks: string[]) => void }) {
  return (
    <div className="done-tasks">
      <i>Done tasks</i>
      <ClearButton setDoneTasks={setDoneTasks} />
    </div>
  );
}
