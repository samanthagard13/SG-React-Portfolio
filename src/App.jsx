import { React, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import NavRoutes from "./routes/Routes";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <NavRoutes/>
    </Router>
    </>
  );
}

export default App;
