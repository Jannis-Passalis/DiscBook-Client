import React, { useEffect } from "react";
import "../App.css";
import { fetchCds, sendEmail } from "../store/cd/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCds } from "../store/cd/selectors";
import { Figure, FormControl, Form, Button } from "react-bootstrap";
import FigureCaption from "react-bootstrap/FigureCaption";
import { selectUser } from "../store/user/selectors";
import { getUserWithStoredToken } from "../store/user/actions";

export default function Home() {
  const dispatch = useDispatch();
  const cds = useSelector(selectAllCds);
  // console.log("what is cds in home page", cds);
  const user = useSelector(selectUser);
  // console.log("what is user in home", user);
  // const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(fetchCds);
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div>
      <h3 className="App">
        Search for your favourite CD's through collections of other users
      </h3>
      <div className="align-items-center">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-dark">Search</Button>
        </Form>
      </div>
      <div>
        {!cds
          ? "Loading CD's"
          : cds.map((cd) => {
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
                        {cd.artist ? `${cd.artist} - ` : null}
                        {cd.album}
                      </strong>{" "}
                      {cd.releaseYear ? `(${cd.releaseYear}), ` : null}
                      Owner: <strong>{cd.list.user.name}</strong>
                      {user.id !== cd.list.user.id ? (
                        cd.forSale ? (
                          <Button
                            variant="info"
                            type="send"
                            onClick={() =>
                              dispatch(
                                sendEmail(user.id, cd.list.user.id, cd.album)
                              )
                            }
                          >
                            Interested In
                          </Button>
                        ) : null
                      ) : null}
                    </FigureCaption>
                  </Figure>
                </ul>
              );
            })}
      </div>
    </div>
  );
}
