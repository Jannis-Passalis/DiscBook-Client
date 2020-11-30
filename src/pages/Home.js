import React, { useEffect } from "react";
import "../App.css";
import { fetchCds } from "../store/cd/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCds } from "../store/cd/selectors";
import { Figure, FormControl, Form, Button } from "react-bootstrap";
import FigureCaption from "react-bootstrap/FigureCaption";

export default function Home() {
  const dispatch = useDispatch();
  const cds = useSelector(selectAllCds);
  console.log("what is cds in home page", cds);

  useEffect(() => {
    dispatch(fetchCds);
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
                      ({cd.releaseYear})
                      {cd.forSale ? (
                        <Button variant="info">Interested In</Button>
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
