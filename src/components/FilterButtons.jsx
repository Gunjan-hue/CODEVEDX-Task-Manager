function FilterButtons({ filter, setFilter}) {
    return (
        <div className="flex justify-center gap-3 mb-5">
            <button
              onClick={() => setFilter("all")}
              className={`px-5 py-2 rounded-xl text-white 
                ${
                  filter === "all"
                  ? "bg-blue-600"
                  : "bg-slate-700"
                }`}
            >
                All
            </button>
            <button 
              onClick={() => setFilter("completed")}
              className={`px-5 py-2 rounded-xl text-white
                ${
                  filter ==="completed"
                  ? "bg-green-600"
                  : "bg-slate-700"
                }`}
              >
                Completed
              </button>
              <button 
              onClick={() => setFilter("pending")}
              className={`px-5 py-2 rounded-xl text-white
                ${
                  filter === "pending"
                  ? "bg-yellow-600"
                  : "bg-slate-700"
                }`}
              >
                Pending
              </button>
        </div>
    );
}

export default FilterButtons;