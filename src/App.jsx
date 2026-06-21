import{useState, useEffect} from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
function App() {
  const [tasks, setTasks]= useState(() =>{
    const savedTasks =
    localStorage.getItem("tasks");
    return savedTasks
      ? JSON.parse(savedTasks)
      : [] ;
  });
  const [filter, setFilter] = useState("all");
  const addTask = (text) =>{
    const newTask={
      id:Date.now(),
      text:text,
      completed:false,
    };
    setTasks([...tasks, newTask]);
  };
  
  const [search, setSearch] = useState("");
   const deleteTask = (id) => {
    setTasks(
      tasks.filter((tasks) => tasks.id !==id)
    );
   };
   const toggleTask=(id)=>{
    setTasks(
      tasks.map((task) =>
      task.id==id
      ?{
        ...task,
        completed: !task.completed,
      }
      :task
    )
  );
   };
   const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
            ...task,
            text: newText,
          }  
        : task
      )
    );
   };
   useEffect(() => {
     localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
     );
   }, [tasks]);
   const filteredTasks = tasks.filter((task) =>
     {
      const matchesSearch = 
      task.text
         .toLowerCase()
         .includes(search.toLowerCase());

      const matchesFilter = 
      filter === "all"
        ? true
        : filter === "completed"
        ? task.completed
        : !task.completed;
        return (
          matchesSearch &&
          matchesFilter
        );
   });
  return(
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8"
    >
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 shadow-2xl"
      >
        <h1 className="text-5xl font-extrabold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
          Task Manager
          </h1>
          <p className="text-center text-gray-300 mb-6">
            Manage your daily tasks efficiently
          </p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-slate-800 p-4 rounded-xl text-center">
              <h3 className="text-gray-400">Total</h3>
              <p className="text-2xl font-bold text-white">{tasks.length}</p>
            </div>
            <div className="bg-green-800 p-4 rounded-xl text-center">
              <h3 className="text-white">Completed</h3>
              <p className="text-2xl font-bold text-white">
                {tasks.filter((task) => task.completed).length}
              </p>
            </div>
          <div className="bg-yellow-700 p-4 rounded-xl text-center">
            <h3 className="text-white">Pending</h3>
            <p className="text-2xl font-bold text-white">
              {tasks.filter((task) => task.completed).length}
            </p>
          </div>
          </div>
          
          
          
          <TaskForm addTask={addTask} />
          <input 
            type="text"
            placeholder="Search Task..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }  
            className="w-full px-4 py-3 bg-slate-800 text-white border border-slate-700 rounded-xl mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <FilterButtons
            filter={filter}
            setFilter={setFilter}
            />
          {
            <TaskList
              tasks={filteredTasks}
              deleteTask={deleteTask}
              toggleTask={toggleTask}
              editTask={editTask}
                /> 
                         
            
          }
      </div>
    </div>
  );
}

export default App;