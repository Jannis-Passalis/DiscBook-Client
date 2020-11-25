import React, { useEffect } from "react";
import "../App.css";
import { fetchCds } from "../store/cd/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCds } from "../store/cd/selectors";

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
      <div>
        {!cds
          ? "Loading CD's"
          : cds.map((cd) => {
              return (
                <div key={cd.id}>
                  <img src={cd.albumCover} alt="Album Cover" />
                  <li>
                    {cd.artist} - {cd.album} ({cd.releaseYear})
                  </li>
                </div>
              );
            })}
      </div>
    </div>
  );
}
