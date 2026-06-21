import { useState } from"react";
function TaskList({ tasks, deleteTask, toggleTask, editTask,})
 {
    const[editingId, setEditingId] = useState(null);
    const[editText, setEditText] = useState(""); 
    return(
        <div>
            {tasks.length === 0 && (
                <p className="text-center text-gray-500 mt-5">
                    No Tasks Available
                </p>
            )}
            {tasks.map((task)=>(
                <div
                key={task.id}
                className="flex justify-between items-center bg-slate-800 text-white p-4 rounded-xl mb-3 shadow-lg hover:scale-[1.02] transition-all durartion-200"
                >
                    <div className="flex items-center gap-3">
                        <input
                           type="checkbox"
                           checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                            className="w-5 h-5 accent-green-500"                          
                             />
                             {
                                editingId === task.id ? (
                                    <input 
                                    value={editText}
                                    onChange={(e) =>
                                        setEditText(e.target.value)
                                    }
                                    className="border p-1 rounded"
                              />
                             ) : (
                             
                            <span
                               className={
                                task.completed
                                  ? "line-through text-green-600 font-medium"
                                  : "font-medium text-white"
                               }
                               >
                                    {task.text}
                            </span>
                            )
                        }
                    </div>
                    <div className="flex gap-2">
                        { 
                           editingId === task.id ? (
                            <button
                              onClick={() => {
                                editTask(task.id, editText);
                                setEditingId(null);
                            }}
                            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                            >
                                Save
                            </button>
                           ):(
                            <button
                            onClick={() => {
                                setEditingId(task.id);
                                setEditText(task.text);
                            }}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                            >
                                Edit
                            </button>
                           )
                        }
                    
                    <button
                      onClick={() => deleteTask(task.id)
                      }
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                    
                    </div>
            ))}
        </div>
    );
}

export default TaskList;