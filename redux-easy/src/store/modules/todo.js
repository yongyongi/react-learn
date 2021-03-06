// 우리가 원하는 행동, 데이터의 변화를 각각 액션으로 할당

// 액션 타입(문자열)

const CREATE = "todo/CREATE"; // 할 일 목록을 추가하는 액션
const DONE = "todo/DONE"; // 할 일 목록 중에서 완료 처리 하는 것

// 액션 생성 함수

export function create(payload) {
  return {
    type: CREATE,
    payload: payload,
  };
}

export function done(id) {
  return {
    type: DONE,
    id: id,
  };
}

// 초기 상태

const initState = {
  list: [
    { id: 0, text: "세탁소 가기", done: false },
    { id: 1, text: "헬스 가기", done: false },
    { id: 2, text: "커피 먹기", done: true },
  ],
  listName: "할 일 목록",
};

// 리듀서

export default function todo(state = initState, action) {
  switch (action.type) {
    case CREATE:
      return {
        ...state,
        list: [
          ...state.list,
          { id: action.payload.id, text: action.payload.text, done: false },
        ],
      };

    case DONE:
      return {
        ...state,
        list: state.list.map((el) =>
          el.id === action.id ? { ...el, done: true } : el
        ),
      };

    default:
      return state;
  }
}
