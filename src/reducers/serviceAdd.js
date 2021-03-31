import {
  CHANGE_SERVICE_FIELD,
  ADD_SERVICE,
  EDIT_SERVICE,
  CANCEL_EDIT_SERVICE,
} from "../actions/actionTypes";

const initialState = {
  id: "",
  name: "",
  price: "",
};

export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { nameField, value } = action.payload;
      return { ...state, [nameField]: value };

    case EDIT_SERVICE:
      const { id, name, price } = action.payload;
      return { id, name, price };

    case ADD_SERVICE:
      return { ...initialState };

    case CANCEL_EDIT_SERVICE:
      return { ...initialState };

    default:
      return state;
  }
}
