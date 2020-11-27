import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserWithStoredToken } from "../store/user/actions";
import { selectUser } from "../store/user/selectors";
import { Button, Figure, Form, Nav } from "react-bootstrap";
import FigureCaption from "react-bootstrap/esm/FigureCaption";
import moment from "moment";
import { selectAllCds } from "../store/cd/selectors";
import { fetchCds } from "../store/cd/actions";

export default function MyDiscBook() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  console.log("what is user", user);
  const cds = useSelector(selectAllCds);
  console.log("what is cds in my discbook", cds);

  const usersCds = cds?.filter((cd) => {
    if (user.id === cd.list.userId) {
      return true;
    } else {
      return false;
    }
  });

  console.log("what is usersCds", usersCds);

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
                      ({cd.releaseYear})
                    </FigureCaption>
                  </Figure>
                </ul>
              );
            })}
      </div>
    </div>
  );
}
