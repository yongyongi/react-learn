# react 설치 및 사용

기존에는 webpack과 babel을 하나하나 설정해야했지만, `create-react-app`이 생기면서 가장 보편적인 패턴으로 react를 빠르게 개발할 수 있게 도와준다.

## 설치

`npx create-react-app [폴더명]`

> 현재 폴더에서 설치하려면 `npx create-react-app .`

npx를 사용하는 이유에 대해서 궁금하다면 [클릭](https://github.com/yongyongi/devyongi_blog/tree/master/React/npx%EB%A1%9C%20%EC%84%A4%EC%B9%98%ED%95%98%EB%8A%94%20%EC%9D%B4%EC%9C%A0)

## 실행 및 빌드하기

설치를 한 후에 `npm start`를 하면, script에 있는 start가 실행되면서 localhost:3000에서 화면이 띄어진다. 이 화면에서 network탭에 들어가보면 사이트의 용량이 나오는데 생각보다 높다. 개발용으로 실행되는 것이기 때문에 압축하지 않았기에 용량이 클 수밖에는 없다.

실제 서비스에서는 용량을 최적화하여야 하기 때문에`npm build`를 실행하면 된다. build가 되면, babel과 webpack이 적용되면서 build 폴더에 배포하기 좋은 형태로 압축이 된다.

> 압축된 파일을 실행해보고 싶다면, `npx serve -s build`를 해보면 된다.

## eject

`react-create-app`를 설치하면 package.json에 script안에 eject명령어가 있다. 이 부분을 실행하게 되면, default로 적용된 webpack, babel이 package.json에 생기고, config,script 폴더가 생기면서 커스터마이징을 할 수 있게 된다.

실무에서 가끔 커스터마이징을 하는 경우가 있다고 한다.

## 함수형 컴포넌트에서 props와 state

props와 state는 클래스 컴포넌트에서의 사용법과 함수형 컴포넌트에서의 사용법이 조금 다르다.

최신 스타일인 함수형 컴포넌트에서는 useState를 사용하여 state를 관리하고, props는 인자로 전달하여 사용한다.

```jsx
import React, { useState } from "react";

const App = (props) => {
  const [text, setText] = useState("hello");
  const click = () => {
    setState("bye");
  };
  return <div onClick={click}>{text}</div>;
};
```

위와 같이 비구조할당을 통해 useState를 선언하고, useState인자에 초기값을 넣는다. 선언된 배열의 첫번째 인자인 text는 현재의 text값이고, 두번째 인자인 setText는 text값을 변경할 수 있는 함수이다. 그래서 처음에는 초기값인 "hello"가 출력되고, 클릭하였을 때, text값이 "bye"로 바뀌면서 브라우저에도 "bye"가 출력된다.

props전달 방식은 두가지이다. 첫번째는 props를 인자로 넣어 사용하는 것과 속성을 객체 형태로 전달하여 바로 사용하는 것이다.

```jsx
// App.js
const App = () => {
  const hello = "hello world";
  return <MainHeader text={hello} />;
};

export default App;
```

```jsx
// MainHeader.js
// props 전달 방법 1.
const MainHeader = (props) => {
  return <div>{props.text}</div>;
};

//props 전달 방법 2.
const MainHeader = ({ text }) => {
  return <div>{text}</div>;
};

export default MainHeader;
```

## 컴포넌트 스타일링

1. css

가장 기본적인 css의 파일을 생성하여, components폴더에 js파일과 css파일을 같이 생성하여 관리하거나, style폴더를 생성하여 css만 따로 관리하기도 한다. 그리고 js파일에 css파일을 import하여 적용한다.

```bash
├── components
│   ├── Main.js
│   └── Main.css

├── components
│   ├── Main.js
│   ├── style
│       └── Main.css
```

하지만, 이 방법은 잘 사용하지 않는다.

2. Sass
   `npm i node-sass`

Sass는 css의 selector의 중첩이나 조건문, 반복문, 다양한 단위의 연산등 css보다 많은 기능을 사용할 수 있다.

Sass의 3버전에서 SCSS가 등장했는데, 간단히 말하면, {}, ;와 같이 기존의 css에서 사용하던 문법을 지원하는 것이다.

취향차이지만, 보통은 SCSS를 추천한다고 한다.

똑같이 .scss파일을 만들어 import해서 사용하면 된다.

3. styled-component
   `npm i styled-components`

react에서 가장 많이 사용되는 스타일링으로 파일을 따로 만들지 않고, js파일에서 바로 생성하여 적용할 수 있다.

```js
const App = () => {
  return <Container></Container>;
};

const Container = styled.div`
  width: 100%;
`;
```

styled-components에서도 css파일과 같이 몇글자를 작성하였을 때 syntax highlighting이 나오길 바란다면 확장프로그램에서 styled-components를 검색하여 설치하면 된다.
