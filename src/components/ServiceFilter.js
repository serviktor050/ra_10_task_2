import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterService } from "../actions/actionCreators";

export default function ServiceFilter() {
  const item = useSelector((state) => state.serviceFilter);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { value } = evt.target;
    dispatch(filterService(value));
  };

  return <textarea name="filter-service" onChange={handleChange}></textarea>;
}
