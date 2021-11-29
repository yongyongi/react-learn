# react 기초 강의

## 강의 주요 내용

- react fundamentals
- webpack
- redux
- es6

## 서브 내용

- express
- mognoDB
- mogoose

## 프로젝트

- 전화번호부
- 카운터(redux)
- 무한 스크롤형 메모패드

## React

react는 view부분을 컴포넌트 단위로 개발하는 자바스크립트 라이브러리이다. 또, react는 단지 유저 인터페이스를 만들기 위한 라이브러리이기 때문에 가볍다.

### 프레임워크와 라이브러리 차이

- 프레임워크

  틀이 있고, 우리가 채워 넣어서 사용할 수 있으나 틀을 벗어나기는 어렵다. 그리고 보통 단 한가지의 프레임워크만 사용한다. 다른 프레임워크나 라이브러리를 사용할 경우 충돌이 생길 수 있기 때문이다. 사용하지 않는 기능도 구현되어있기 때문에 상황에 따라서 무겁게 느껴진다.

- 라이브러리

  필요한 곳에 사용하면 되고, 다른 라이브러리와 충돌할 일도 없다. 프레임워크 처럼 모든 기능이 구현되어있지 않아서 가볍다.

### Angular대체가 React인가?

angular와 react를 비교하는 경우가 있는데 이것은 사과와 오렌지와 비교하는 것처럼 비교 대상이 아니다. angular는 라이브러리가 아닌 많은 기능이 갖추어진 프레임워크이다. 반면, react는 view만 담당하는 라이브러리이다. 그래서 react와 angular는 비교하고 대체하는 것이 아니라 상황에 맞게 적절한 곳에 사용하면 된다.

### react의 핵심 virtual DOM

```js
document.querySelector("#content").innerHTML = "hi yong";
```

위 코드와 같이 직접 DOM을 처리하는 것은 성능도 좋지 않고, 비효율적이고, 관리하기가 쉽지 않다. 처리해야할 데이터가 많아 질경우에는 더욱 힘들어 진다.(단순히 정보 제공용 웹 페이지일 경우에는 DOM이 더 좋다)

반면 virtual DOM은 이를 추상한 것으로 자바스크립트 객체이고, 이 안에서 처리하는 것은 이미 렌더링 된 html을 실제 dom을 사용해 처리하는 것보다 빠르다.

참고
[지그의 virtual DOM](https://youtu.be/PN_WmsgbQCo)
[React and the virtual DOM](https://youtu.be/BYbgopx44vo)

### React 장점

- virtual DOM 사용
- 배우기 간단하다
- 뛰어난 garbage collection, 메모리 관리 성능
- 서버 & 클라이언트 사이드 렌더링 모두 지원, 서버 사이드 렌더링이 가능하므로 초기 구동 딜레이를 줄이고, 클라이언트 사이드 렌더링 SEO를 지원하지 않는 포탈에서도 SEO를 할 수 있다.
- 매우 간편한 UI 수정 및 재사용(컴포넌트화)
- 페이스북에서 밀어준다. 페이스북에서 개발하였고, 공룡기업에서 사용하는 라이브러리인 만큼 유지보수도 잘되고, 업데이트도 잘 되고 있다.
- 다른 프레임워크나 라이브러리와 혼용가능 (이미 개발이 완료된 서비스에도 적용 가능)

### React 단점

- view only
- 배우기 쉽지만, js 배경지식이 부족하다면 어려울 수 있다.
- IE8 이하 지원 X

## class

ES6에 도입된 문법으로 상속받아 사용하고, 다른 언어에서도 그렇듯 생성자 메서드가 있다. js class안에서는 메서드만 만들 수 있다. 다른 언어는 사용해 보지 않았지만, 비슷하게 사용하는 듯 하다. functional component로만 개발해보았기 때문에 class문법을 익히기 좋을 것 같다.

## JSX

- 자바스크립트 코드에서 html형식을 그대로 사용할 수 있는 문법.
- 모든 JSX문법은 container element안에 포함 시켜야 한다.

```jsx
class App extends React.Component{
    render(){
        return(
            <h1>틀린 예제<h1>
            <p>container element가 없다<p>
        )
    }
}
```

```jsx
class App extends React.Component{
    render(){
        return(
            <div>
                <h1>맞는 예제<h1>
                <p>하위element를 감싸는 상위 element가 있다.<p>
            </div>
        )
    }
}
```

태그를 감싸는 최상위 태그가 있기만 하면된다. 꼭 div를 사용하지 않고, react에서 지원해주는 Fragments(빈 태그)를 사용하는 것도 좋은 방법이다.

Fragments - `<></>`

- jsx에서 js를 표현하기 위해서는 {}를 사용하면 된다.

```jsx
class App extends React.Componet {
  render() {
    let text = "hello";
    return <div>{text}</div>;
  }
}
```

- inline style적용시 camelCase인 객체가 사용되어야한다.

```jsx
class App extends React.Componet {
  render() {
    let text = "hello";
    let style = {
      backgroundColor: "black",
    };
    return <div style={style}>{text}</div>;
  }
}
```

- JSX에서의 주석처리는 `{*...*}`로 한다. 주석 역시 태그 안에서 작성되어야한다.

## props

- 컴포넌트 내부의 Immutable Data(변화하지 않는 데이터)를 처리할 때 사용한다.
- `this.props.children`은 기본적으로 갖고 있는 props로 `<test>여기에 있는 값<test>`이다.

```jsx
// Codelap 컴포넌트 - App에 포함될 컴포넌트 중 하나
class Codelap extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

// App 컴포넌트 - 최상위 컴포넌트
class App extends React.Component {
  render() {
    return <Codelap name="yongyongi">children</Codelap>;
  }
}
```

위와 같이 작성해주면 App class안에서 Codelap태그 안에 설정해준 name의 값이 Codelap class의 this.props.name의 값으로 전달되고, App class안에서 Codelap태그 사이에 값이 Codelap class의 this.props.children값으로 전달된다.

- props의 기본값 설정은 컴포넌트 선언이 끝난 후에 이런식으로 해주면 된다.

```jsx
Component.defaultProps = { value: 0 };
```

- props의 type검증도 할 수 있다.

React v15.5부터는 prop-types 라이브러리를 사용하여 type검증을 할 수 있다.

```jsx
Component.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number.isRequired,
};
```

자체적으로 type검증이 가능한지 첨알았다..

## state

- 유동적인 데이터를 보여줄때 사용한다.
- 초기값 설정이 필수, 생성자(constructor)에서 `this.state = {}` 로 설정
- props와 달리 컴포넌트 내부에서 `this.setState({})`로 값을 변경할 수 있다.
- 렌더링 전(constructor)에 setState 사용을 못하고, 렌더링 후에는 `this.state=`를 절대 사용하지 말아야한다. 변경은 setState로!

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  render() {
    return;
    <div>
      <h1>{this.state.value}</h1>
    </div>;
  }
}
```

super는 부모 클래스의 메서드를 사용하기 위해서 super(props)를 하는 것이다. 그래서 React.Component의 state를 사용할 수 있게 된다.

constructor에서 this.state로 value값을 초기화 하였기 때문에 렌더링 부분에서 this.state.value를 사용할 수 있게 되었다.

## React에서 이벤트 주기

html에서 사용하였듯이 이벤트 속성에 함수를 넣어주면 되지만,

```html
<button onclick="js:test()"></button>
```

React에서는 camelCase를 사용하여 이벤트 속성은 준다.

```jsx
<button onClick={this.handleClick}></button>
```

이렇게 하여도 실행이 되지는 않는다.

```jsx
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      value: this.state.value + 1,
    });
  }
  render() {
    return;
    <div>
      <h1>{this.state.value}</h1>
      <button onClick={this.handleClick}></button>
    </div>;
  }
}
```

handleClick 메서드를 만들어 클릭할때마다 setState를 하고 싶지만, this.setState의 this가 무엇을 가리키는지 모르기 때문에 에러가 발생한다. 그렇기 때문에 `this.handleClick.bind(this)`를 해줌으로써 render할때의 this와 같게 할 수 있다. 조금 더 코드를 보기 좋고 컨벤션에 따르기 위해서 위의 코드와 같이 constructor안에 `this.handleClick = this.handleClick.bind(this)`를 작성한다.

여기서 onClick안에서 함수를 this.handleClick() 이렇게 호출하지 않고, this.handleClick으로 한 이유는 메서드는 렌더링 될때마다 실행이 되기 때문에 호출을 할 경우는 메서드 실행 state변경 그러면 또 렌더링 또 메서드 실행 state변경 이런식으로 엄청난 문제가 있기 때문에 호출하지 않는다.
