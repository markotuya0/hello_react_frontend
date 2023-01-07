// API url
const baseApi = '/api/v1/greetings';

// action
const GET_MESSAGE = 'GET_MESSAGE';

// initialize state
const initialState = 'hello basit';

// reducer function
const greetingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGE:
      return action.payload;
    default:
      return state;
  }
};

export const getMessage = () => async (dispatch) => {
  const res = await fetch(baseApi, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await res.json();
  dispatch({
    type: GET_MESSAGE,
    payload: data.message,
  });
};
export default greetingReducer;
