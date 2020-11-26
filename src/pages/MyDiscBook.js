import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken } from "../store/user/actions";
import { selectUser } from "../store/user/selectors";
import { Figure } from "react-bootstrap";
import FigureCaption from "react-bootstrap/esm/FigureCaption";

export default function MyDiscBook() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log("what is user", user);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div>
      <h3>My DiscBook</h3>
      <Figure>
        <FigureCaption>
          This DiscBook owner: <strong>{user.name}</strong>
        </FigureCaption>
        <Figure.Image
          className="rounded float-left"
          width={200}
          height={200}
          src={user.picture}
          rounded
          alt="Album Cover"
        />
      </Figure>
    </div>
  );
}
