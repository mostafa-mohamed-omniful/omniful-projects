import "./InputBox.css";

export function InputBox({ input, setInput }: { input: string; setInput: (value: string) => void }) {
  return (
    
    <input
      className="input-box"
      type="text"
      placeholder="Enter a task"
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
}
