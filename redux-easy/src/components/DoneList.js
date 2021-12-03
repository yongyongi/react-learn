import { useSelector } from "react-redux";

const DoneList = () => {
  //   const dispatch = useDispatch();
  const list = useSelector((state) => {
    return state.todo.list.filter((todo) => {
      return todo.done;
    });
  });
  return (
    <div>
      <h1>Complete</h1>
      <ul>
        {list.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default DoneList;
