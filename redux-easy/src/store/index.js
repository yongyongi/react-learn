import { combineReducers } from "redux";
import todo from "./modules/todo"; // export default로 내보낸 것을 가져온다.
//export로 내보낸 것은 import {} from "./modules/todo.js"로 가져올 수 있다.

// 최상위 리듀서 - 여러 리듀서들을 합쳐준다. 전역 상태의 데이터를 가지고 있다.
export default combineReducers({
  todo, // 서브 리듀서
});
