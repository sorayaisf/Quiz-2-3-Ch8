import List from "./List";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [contacts, setContacts] = useState([
    {
      username: "John Doe",
      email: "john@yahoo.com",
      experience: "great",
      lvl: "beginner",
    },
    {
      username: "Mark Jason",
      email: "mark@yahoo.com",
      experience: "great",
      lvl: "pro",
    },
  ]);

  const [user, setUser] = useState({
    name: "",
    telp: "",
  });

  const handleChange = (e, name) => {
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = () => {
    // setContacts({ ...contacts }, { ...user });
    contacts.push(user);

    console.log(user, [...contacts]);
  };

  useEffect(() => {
    setContacts(contacts);
  }, [contacts]);

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
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">Email</label>
          <input
            onChange={(e) => handleChange(e, "email")}
            type="text"
            className="form-control"
            name="email"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">Experience</label>
          <input
            onChange={(e) => handleChange(e, "experience")}
            type="text"
            className="form-control"
            name="experience"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">Level</label>
          <input
            onChange={(e) => handleChange(e, "lvl")}
            type="text"
            className="form-control"
            name="lvl"
          />
        </div>
        <div>
          <button
            type="button"
            onClick={handleSubmit}
            className="btn btn-warning w-100 mt-3"
          >
            Submit
          </button>
        </div>
      </form>

      <List data={contacts} />
    </div>
  );
}

export default App;
