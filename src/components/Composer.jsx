import { useState } from "react";

export default function Composer({ onSend }) {
  const [draft, setDraft] = useState("");

  function send() {
    const text = draft.trim();
    if (text === "") {
      return;
    }

    onSend(text);
    setDraft("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    send();
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }

    if (e.key === "Escape") {
      setDraft("");
    }
  }

  return (
    <form className="composer" onSubmit={handleSubmit}>
      <textarea 
        value={draft} 
        rows={2} 
        placeholder="Type a message..."
        onChange={(e) => setDraft(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button type="submit">Send</button>
    </form>
  );
}
