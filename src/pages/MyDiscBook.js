import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken } from "../store/user/actions";
import { selectUser } from "../store/user/selectors";
import { Button, Figure, Form, Nav } from "react-bootstrap";
import FigureCaption from "react-bootstrap/esm/FigureCaption";
import moment from "moment";
import { selectAllCds } from "../store/cd/selectors";
import {
  ChangeSellingOption,
  DeleteCdFromDb,
  fetchCds,
} from "../store/cd/actions";
import { showMessageWithTimeout } from "../store/messages/actions";

export default function MyDiscBook() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const cds = useSelector(selectAllCds);

  useEffect(() => {
    if (!user.id) {
      dispatch(
        showMessageWithTimeout(
          "info",
          true,
          "You are online more than 2 hours without authenticating yourself again. For the safety of your account, please logout and login again.",
          7000
        )
      );
    }
  }, [user.id, dispatch]);

  const usersCds = cds?.filter((cd) => {
    if (user.id === cd.list?.userId) {
      return true;
    } else {
      return false;
    }
  });

  console.log("what is usersCds", usersCds);

  const SubmitDeleteCd = (cdId) => {
    return (event) => {
      console.log("hi, this is submit delete cd");
      event.preventDefault();

      dispatch(DeleteCdFromDb(cdId));
    };
  };

  useEffect(() => {
    dispatch(getUserWithStoredToken());
    dispatch(fetchCds);
  }, [dispatch]);

  return (
    <div>
      <h3>My DiscBook</h3>
      <Figure>
        <FigureCaption>
          This DiscBook owner: <strong>{user.name}</strong>
        </FigureCaption>
        <FigureCaption>
          Member since: {moment(user.createdAt).format("YYYY")}
        </FigureCaption>
        <Figure.Image
          className="rounded float-left"
          width={200}
          height={200}
          src={user.picture}
          rounded
          alt="Profile Picture"
        />
      </Figure>
      <Form.Group className="mt-5">
        <Nav.Link href="/addcd">
          <Button variant="outline-dark">Add CD's to your collection</Button>
        </Nav.Link>
      </Form.Group>
      <div>
        {!usersCds
          ? "Loading CD's"
          : usersCds.map((cd) => {
              return (
                <ul key={cd.id}>
                  <Figure>
                    <Figure.Image
                      className="rounded float-left"
                      width={60}
                      height={60}
                      src={cd.albumCover}
                      rounded
                      alt="Album Cover"
                    />
                    <FigureCaption>
                      <strong>
                        {cd.artist ? `${cd.artist} - ` : null} {cd.album}
                      </strong>{" "}
                      {cd.releaseYear ? `(${cd.releaseYear}), ` : null}
                      for sale: {cd.forSale ? "Yes " : "No "}
                      <Button
                        variant="outline-dark"
                        type="submit"
                        onClick={() => dispatch(ChangeSellingOption(cd.id))}
                      >
                        {cd.forSale ? "Not sell it" : "Sell it"}
                      </Button>
                      <Button
                        variant="outline-danger"
                        type="submit"
                        onClick={SubmitDeleteCd(cd.id)}
                      >
                        Delete CD from collection
                      </Button>
                    </FigureCaption>
                  </Figure>
                </ul>
              );
            })}
      </div>
    </div>
  );
}
