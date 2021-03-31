import { nanoid } from "nanoid";
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  FILTER_SERVICE,
} from "../actions/actionTypes";

const initialState = [
  { id: nanoid(), name: "Замена стекла", price: 21000 },
  { id: nanoid(), name: "Замена дисплея", price: 25000 },
];

export default function serviceListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_SERVICE:
      let newObject = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
      };

      let findElement = state.find((item) => item.id === newObject.id);

      if (!findElement) {
        state.push({
          id: nanoid(),
          name: newObject.name,
          price: Number(newObject.price),
        });
      } else {
        findElement.name = action.payload.name;
        findElement.price = action.payload.price;
      }
      return [...state];

    case REMOVE_SERVICE:
      const { id } = action.payload;
      return state.filter((service) => service.id !== id);

    case FILTER_SERVICE:
      const { value } = action.payload;
      if (value === "") {
        return initialState;
      } else {
        return state.filter((service) => {
          if (service.name.includes(value)) {
            return service.name;
          }
        });
      }

    default:
      return state;
  }
}
