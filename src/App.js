import List from "./List";
import "./App.css";
import { useState } from "react";

function App() {
  const [contacts, setContacts] = useState([
    {
      username: "John",
      email: "john@yahoo.com",
      experience: "great",
      lvl: "beginner",
    },
    {
      username: "Mark",
      email: "mark@yahoo.com",
      experience: "great",
      lvl: "pro",
    },
  ]);

  const [user, setUser] = useState({
    username: "",
    email: "",
    experience: "",
    lvl: "",
  });

  const handleChange = (e, name) => {
    const value = e.target.value;
    console.log({ value });
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    const currentData = [...contacts];
    currentData.push(user);
    setContacts(currentData);
    setUser({
      username: "",
      email: "",
      experience: "",
      lvl: "",
    });
  };

  const handleDelete = (i) => {
    const currentData = [...contacts];
    currentData.splice(i, 1);
    setContacts(currentData);
  };

  console.log({ user });

  return (
    <div className="App">
      <h1 className="px-3 py-3">All About Players</h1>
      <form className="px-3 py-4">
        <div className="form-group">
          <label htmlFor="">Username</label>
          <input
            onChange={(e) => handleChange(e, "username")}
            type="text"
            className="form-control"
            name="username"
            value={user.username}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => handleChange(e, "email")}
            type="text"
            className="form-control"
            name="email"
            value={user.email}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">Experience</label>
          <input
            onChange={(e) => handleChange(e, "experience")}
            type="text"
            className="form-control"
            name="experience"
            value={user.experience}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">Level</label>
          <input
            onChange={(e) => handleChange(e, "lvl")}
            type="text"
            className="form-control"
            name="lvl"
            value={user.lvl}
            required
          />
        </div>
        <div>
          <button
            type="button"
            onClick={(e) => handleSubmit(e)}
            className="btn btn-warning w-100 mt-3"
          >
            Submit
          </button>
        </div>
      </form>

      <List data={contacts} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
