import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "../store/user/actions";

export default function MyDiscBook() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);
  return (
    <div>
      <h3>MyDiscBook</h3>
    </div>
  );
}
