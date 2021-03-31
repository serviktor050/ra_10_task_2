import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  CANCEL_EDIT_SERVICE,
  FILTER_SERVICE,
} from "./actionTypes";

export function addService(id, name, price) {
  return { type: ADD_SERVICE, payload: { id, name, price } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function changeServiceField(nameField, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { nameField, value } };
}

export function editService(id, name, price) {
  return { type: EDIT_SERVICE, payload: { id, name, price } };
}

export function cancelEditService() {
  return { type: CANCEL_EDIT_SERVICE };
}

export function filterService(value) {
  return { type: FILTER_SERVICE, payload: { value } };
}
