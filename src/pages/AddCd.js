import React, { useEffect, useState } from "react";
import { Button, Figure, Form, FormControl } from "react-bootstrap";
import FigureCaption from "react-bootstrap/esm/FigureCaption";
import { useDispatch, useSelector } from "react-redux";
import { AddCdToDb } from "../store/cd/actions";
import { fetchApiCds } from "../store/cdSearch/actions";
import { selectAllSearchedCds } from "../store/cdSearch/selector";
import { getUserWithStoredToken } from "../store/user/actions";
import { selectUser } from "../store/user/selectors";

export default function AddCd() {
  const [cdSearch, setCdSearch] = useState("");
  const dispatch = useDispatch();
  const cdSearchResults = useSelector(selectAllSearchedCds);
  const user = useSelector(selectUser);
  console.log("what is cdSearchResults in page", cdSearchResults);
  console.log("what is user in add cds", user);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  function SubmitNewCdSearch(event) {
    console.log("hi, this is submit new cd search console.log");
    event.preventDefault();

    dispatch(fetchApiCds(cdSearch));

    setCdSearch("");
  }

  const SubmitAddCd = (album, year, cdCover) => {
    return (event) => {
      console.log("hi, this is submit add cd console.log");
      event.preventDefault();

      dispatch(AddCdToDb(album, year, cdCover, user.id));
    };
  };

  return (
    <div>
      <h3 className="App">
        Search for the CD you want to add to your collection.
      </h3>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          value={cdSearch}
          onChange={(event) => setCdSearch(event.target.value)}
        />
        <Button
          variant="outline-dark"
          type="submit"
          onClick={SubmitNewCdSearch}
        >
          Search
        </Button>
      </Form>
      <div>
        {!cdSearchResults
          ? "Loading CD's"
          : cdSearchResults.map((cd) => {
              return (
                <ul key={cd.id}>
                  <Figure>
                    <Figure.Image
                      className="rounded float-left"
                      width={60}
                      height={60}
                      src={cd.thumb}
                      rounded
                      alt="Album Cover"
                    />
                    <FigureCaption>
                      <strong>{cd.title}</strong>{" "}
                      {cd.year ? `${cd.year},` : null}{" "}
                      {cd.country ? `${cd.country},` : null}
                      {cd.format
                        ? `format:
                      ${cd.format?.map((format) => {
                        return format;
                      })}`
                        : null}
                    </FigureCaption>
                    <Button
                      variant="outline-dark"
                      type="submit"
                      onClick={SubmitAddCd(cd.title, cd.year, cd.thumb)}
                    >
                      Add This CD
                    </Button>
                  </Figure>
                </ul>
              );
            })}
      </div>
    </div>
  );
}
