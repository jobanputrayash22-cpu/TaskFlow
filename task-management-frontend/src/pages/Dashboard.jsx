import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const api = axios.create({
  baseURL: "https://taskflow-api-ty4q.onrender.com",
  headers: {
    Authorization: `Bearer ${token}`
  }
});

  // Get Tasks
  const getTasks = async () => {
    try {
      const response = await api.get("/tasks/");
      setTasks(response.data);
    } catch (error) {
      if (error.response?.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        setError("Failed to load tasks");
      }
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }

    getTasks();
  }, []);

  // Add / Update Task
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setError("Task title is required");
      return;
    }

    try {
      setError("");

      if (editingId) {
        await api.put(`/tasks/${editingId}`, {
          title,
          description
        });
      } else {
        await api.post("/tasks/", {
          title,
          description
        });
      }

      setTitle("");
      setDescription("");
      setEditingId(null);

      getTasks();
    } catch (error) {
      setError(
        error.response?.data?.detail ||
        "Something went wrong"
      );
    }
  };

  // Edit
  const handleEdit = (task) => {
    setEditingId(task.id);
    setTitle(task.title);
    setDescription(task.description || "");
  };

  // Complete / Pending
  const toggleComplete = async (task) => {
    try {
      await api.put(`/tasks/${task.id}`, {
        completed: !task.completed
      });

      getTasks();
    } catch (error) {
      setError("Failed to update task");
    }
  };

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this task?")) {
      return;
    }

    try {
      await api.delete(`/tasks/${id}`);
      getTasks();
    } catch (error) {
      setError("Failed to delete task");
    }
  };

  // Search
  const handleSearch = async () => {
    try {
      const response = await api.get(
        `/tasks/?search=${search}`
      );

      setTasks(response.data);
    } catch (error) {
      setError("Search failed");
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          TaskFlow
        </h1>

        <button
          onClick={handleLogout}
          className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-slate-100"
        >
          Logout
        </button>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-8">

        <h2 className="text-3xl font-bold text-slate-800 mb-6">
          Task Dashboard
        </h2>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-5">
            {error}
          </div>
        )}

        {/* Add / Edit Form */}
        <div className="bg-white p-6 rounded-xl shadow mb-6">

          <h3 className="text-xl font-semibold mb-4">
            {editingId ? "Edit Task" : "Add New Task"}
          </h3>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 mb-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <textarea
              placeholder="Task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-blue-500"
              rows="3"
            />

            <div className="flex gap-3">

              <button
                type="submit"
                className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700"
              >
                {editingId ? "Update Task" : "Add Task"}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    setTitle("");
                    setDescription("");
                  }}
                  className="bg-slate-300 text-slate-800 px-5 py-2 rounded-lg font-semibold"
                >
                  Cancel
                </button>
              )}

            </div>

          </form>
        </div>

        {/* Search */}
        <div className="bg-white p-5 rounded-xl shadow mb-6 flex gap-3">

          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border border-slate-300 rounded-lg px-4 py-3 outline-none"
          />

          <button
            onClick={handleSearch}
            className="bg-slate-800 text-white px-5 rounded-lg"
          >
            Search
          </button>

          <button
            onClick={getTasks}
            className="bg-slate-300 px-5 rounded-lg"
          >
            All
          </button>

        </div>

        {/* Tasks */}
        <div className="space-y-4">

          {tasks.length === 0 ? (
            <div className="bg-white p-8 rounded-xl shadow text-center text-slate-500">
              No tasks found
            </div>
          ) : (

            tasks.map((task) => (

              <div
                key={task.id}
                className="bg-white p-5 rounded-xl shadow flex justify-between items-center"
              >

                <div>

                  <h3
                    className={`text-xl font-semibold ${
                      task.completed
                        ? "line-through text-slate-400"
                        : "text-slate-800"
                    }`}
                  >
                    {task.title}
                  </h3>

                  <p className="text-slate-500 mt-1">
                    {task.description}
                  </p>

                  <span
                    className={`inline-block mt-2 px-3 py-1 rounded-full text-sm ${
                      task.completed
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {task.completed
                      ? "Completed"
                      : "Pending"}
                  </span>

                </div>

                <div className="flex gap-2">

                  <button
                    onClick={() => toggleComplete(task)}
                    className="bg-green-500 text-white px-3 py-2 rounded-lg"
                  >
                    ✓
                  </button>

                  <button
                    onClick={() => handleEdit(task)}
                    className="bg-blue-500 text-white px-3 py-2 rounded-lg"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(task.id)}
                    className="bg-red-500 text-white px-3 py-2 rounded-lg"
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))

          )}

        </div>

      </div>

    </div>
  );
}

export default Dashboard;