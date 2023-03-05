import MyRoutes from "./components/Routing/myroutes";
import { Provider } from "react-redux";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MyRoutes />
      </div>
    </Provider>
  );
}

export default App;
