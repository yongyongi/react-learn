# redux 이해 및 간단 사용법

상태관리 라이브러리라고 불리며, 프로젝트가 확장되면서 useState로만 상태를 관리하기 어려워지기 때문에 전역에서 관리할 수 있는 redux를 사용한다. react에서 최적화 되어있는 redux를 사용하기 위해서 react-redux를 설치한다.

`npx create-react-app my-app --template redux`
`npm i redux react-redux`

두 가지 설치 방법이 있다. template버전으로 설치하면 처음에는 어려울 수 있다. 두번째 방법으로 설치하여 사용해보면서 나중에 template을 이해해보자.

redux에는 action, dispatch, reducer, store라는 용어가 있다.

- dispatch : action을 발생시키기 위한 함수이다.
- action : type이 반드시 존재해야하며, 데이터를 포함하고 있다.
- reducer : action을 전달하여 상태를 변화시키는 역할이다.
- store : 앱에서 사용되는 하나의 저장소이며 state와 reducer를 포함한다.

## redux에서 state를 변경하기 위한 과정

1. dispatch 함수를 실행하면,
2. action이 발생한다.
3. 이를 reducer가 전달하면,
4. 최종적으로 state를 바꾼다.

redux를 사용할 때 사용하는 패턴으로 store폴더를 생성하고, 그 안에 modules폴더와 index.js를 만든다. modules에서 파일 하나하나를 관리하고, 그 파일들을 index.js에 나중에 합쳐준다.

## redux 코드로 이해하기

```js
// 액션 타입 정의

// type은 통상적으로 대문자로 사용한다.
const CREAT = "todo/CREATE"; // 새로운 업무를 추가하는 액션
const DONE = "todo/DONE"; // 처리한 업무를 완료 처리하는 액션

// 액션 함수

// 할 일 목록 추가하는 액션
export function create(payload) {
  return {
    type: CREAT,
    payload: payload,
  };
}

// 완료한 목록 완료 표시하는 액션
export function done(id) {
  return {
    type: CREAT,
    id: id,
  };
}

// 초기 상태

const initState = {
  list: [
    { id: 0, text: "빨래 하기", done: false },
    { id: 1, text: "카페 가기", done: false },
    { id: 2, text: "산책 하기", done: false },
  ],
  listName: "TodoList",
};

// reducer

export default function todo(state, action) {
  switch (action.type) {
    case CREATE: // action type이 CREATE일 때,
      return {
        ...state,
        list: [
          ...state.list,
          { id: action.payload.id, text: action.payload.text, done: false },
        ],
      };
    case DONE: // action type이 DONE일 때,
      return {
        ...state,
        list: state.list.map((todo) => {
          return action.id === todo.id ? { ...todo, done: true } : todo;
        }),
      };
    default:
      // default값은 무조건 지정해줘야한다. 위에 type이 없으면 default값이 리턴된다.
      return state;
  }
}
```

## reducer 바인딩하기

위에서는 하나의 reducer를 만들었지만, 실제 프로잭트에서는 많은 reducer를 가지게 된다. 이 reducer들을 store의 index.js에서 모두 바인딩 해준다.

```js
import { combineReducers } from "redux";
import todo from "./modules/todo";

// 최상위 리듀서 - 여러 리듀서들을 합쳐준다. 전역 상태의 데이터를 가지고 있다.
export default combineReducers({
  // 모든 reducer를 넣어준다.
  todo, // 서브 리듀서
});
```

## store 생성

위와 같이 코드를 작성하였다면, 이제는 store를 생성하여 프로젝트에서 전역 상태를 확인할 수 있다.

store는 src폴더안의 index.js에서 생성해준다.

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { createStore } from "redux";
import rootReducer from "./store";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 브라우저에서 redux 상태를 보기 위해 넣어준다. (밑에 확장프로그램 글 참조)
);

// App이 store에 access할 수 있도록 provider로 감싸준다.
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

전역 상태를 확인해보고 싶다면, console.log(store.getState())를 해보자.

## redux를 위한 확장프로그램(Redux DevTools)

chrome의 확장 프로그램인 Redux DevTools를 설치하면 브라우저의 개발자도구에서 redux라는 탭이 생긴다. 그 탭에서 현재 redux의 상태와 그 외에 데이터를 볼 수 있다.

설치 후에 index.js파일에 `window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()`코드를 추가해주어야 브라우저에서 잘 작동된다.

```js
// src > index.js

// --- 생략
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// --- 생략
```
