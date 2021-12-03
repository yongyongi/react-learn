import AllTodoList from "./components/AllTodoList";
import DoneList from "./components/DoneList";

const App = () => {
  return (
    <div className="App">
      <AllTodoList />
      <DoneList />
    </div>
  );
};

export default App;
