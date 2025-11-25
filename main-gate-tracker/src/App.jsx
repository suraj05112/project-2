import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const [logs, setLogs] = useState([]);

  function addEntry() {
    if (!name || !purpose) return alert("Fill all fields");

    setLogs([
      ...logs,
      {
        id: Date.now(),
        name,
        purpose,
        entry: new Date().toLocaleTimeString(),
        exit: null
      }
    ]);

    setName("surajyadav");
    setPurpose("");
  }

  function markExit(id) {
    setLogs(
      logs.map((log) =>
        log.id === id ? { ...log, exit: new Date().toLocaleTimeString() } : log
      )
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Main Gate Tracker App (React)</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={name}
          placeholder="Visitor Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          value={purpose}
          placeholder="Purpose"
          onChange={(e) => setPurpose(e.target.value)}
        />

        <button onClick={addEntry}>Add Entry</button>
      </div>

      <table border="1" style={{ width: "100%", marginTop: 20 }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Purpose</th>
            <th>Entry</th>
            <th>Exit</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td>{log.name}</td>
              <td>{log.purpose}</td>
              <td>{log.entry}</td>
              <td>{log.exit || "-"}</td>
              <td>
                <button disabled={log.exit} onClick={() => markExit(log.id)}>
                  Mark Exit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default App;
