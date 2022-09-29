import Header from "./components/Header";
import Counter from "./components/Counter";
import store from "./reducer/store";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header></Header>
        <Counter></Counter>
      </Provider>
    </div>
  );
}

export default App;
