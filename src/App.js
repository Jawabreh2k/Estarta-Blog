import { useState } from "react";
import MyRoutes from "./components/Routing/myroutes";

function App() {
  const [blogs, setBlogs] = useState([]);

  return (
    <div className="App">
      <MyRoutes blogs={blogs} setBlogs={setBlogs} />
    </div>
  );
}

export default App;
