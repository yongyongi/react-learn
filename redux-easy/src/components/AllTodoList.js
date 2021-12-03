import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, done } from "../store/modules/todo";

const AllTodoList = () => {
  const list = useSelector((state) =>
    state.todo.list.filter((todo) => {
      return !todo.done;
    })
  );
  const inputRef = useRef();

  const dispatch = useDispatch();

  const addTodo = () => {
    dispatch(create({ id: list.length, text: inputRef.current.value }));
  };
  const checkClick = (id) => {
    dispatch(done(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input type="text" ref={inputRef} />
      <button onClick={addTodo}>추가</button>
      <ul>
        {list.map((todo) => {
          return (
            <div key={todo.id}>
              <input
                // name={todo.id} // ref로 current.name을 하면 id값이 이상하게 나온다
                onClick={() => checkClick(todo.id)}
                type="checkbox"
              />
              {todo.text}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default AllTodoList;
