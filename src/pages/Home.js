import React, { useEffect } from "react";
import "../App.css";
import { fetchCds, sendEmail } from "../store/cd/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCds } from "../store/cd/selectors";
import { Figure, Button, Jumbotron, Container } from "react-bootstrap";
import FigureCaption from "react-bootstrap/FigureCaption";
import { selectUser } from "../store/user/selectors";
import { getUserWithStoredToken } from "../store/user/actions";

export default function Home() {
  const dispatch = useDispatch();
  const cds = useSelector(selectAllCds);
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchCds);
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h3>Take a look at all the CDs in DiscBook</h3>
          <p>
            <strong>DON'T</strong> forget to send an email by clicking the
            "Interested in" button, if you are Interested in buying the CD you
            found.
          </p>
        </Container>
      </Jumbotron>
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
                      {user.id !== cd.list.user.id && user.token !== null ? (
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
                            Interested In {cd.list.user.name}'s CD
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
