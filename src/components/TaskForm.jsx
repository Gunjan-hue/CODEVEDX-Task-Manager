import { useState } from "react";
function TaskForm({ addTask }) {
    const [text, setText] = useState("");
    const handleSubmit = (e) =>  {
        e.preventDefault();
        if (!text.trim())  return;
        addTask(text);
        setText("");
    };
    return (
        <form 
          onSubmit={handleSubmit}
          className="flex gap-3 mb-5"
          >
            <input
              type="text"
              placeholder="Enter Task"
              value={text}
              onChange={(e) =>
        setText(e.target.value)}
              className="flex-1 bg-slate-800 text-white border border-slate-700 p-3 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 rounded-xl font-semibold hover:scale-105 transition"
                >
                    Add
                </button>
          </form>
    );
}

export default TaskForm;