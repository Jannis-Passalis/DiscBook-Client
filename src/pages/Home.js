import React, { useEffect } from "react";
import "../App.css";
import { fetchCds, sendEmail } from "../store/cd/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCds } from "../store/cd/selectors";
import { Figure, Button } from "react-bootstrap";
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
      <h3>Take a look at all the cds</h3>
      <h6>
        and dont forget to send an email with the "Interested in" button, if you
        are Interested in buying the CD
      </h6>
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
