import React, { useEffect } from "react";
import "../App.css";
import { fetchCds } from "../store/cd/actions";
import { useDispatch, useSelector } from "react-redux";
import { selectAllCds } from "../store/cd/selectors";
import { Figure, FormControl, Form, Button } from "react-bootstrap";
import FigureCaption from "react-bootstrap/FigureCaption";
// const nodemailer = require("nodemailer");

export default function Home() {
  const dispatch = useDispatch();
  const cds = useSelector(selectAllCds);
  console.log("what is cds in home page", cds);

  useEffect(() => {
    dispatch(fetchCds);
  }, [dispatch]);

  // async function main() {
  //   let testAccount = await nodemailer.createTestAccount();

  //   let transporter = nodemailer.createTransport({
  //     host: "smtp.ethereal.email",
  //     port: 587,
  //     secure: false, // true for 465, false for other ports
  //     auth: {
  //       user: testAccount.user, // generated ethereal user
  //       pass: testAccount.pass, // generated ethereal password
  //     },
  //   });

  //   let info = await transporter.sendMail({
  //     from: '"Fred Foo 👻" <foo@example.com>', // sender address
  //     to: "pasalis13@hotmail.com", // list of receivers
  //     subject: "Hello ✔", // Subject line
  //     text: "Hello world?", // plain text body
  //     html: "<b>Hello world?</b>", // html body
  //   });

  //   // let info = await transporter.sendMail({
  //   //   from: "discbookcommunity@info.com", // sender address
  //   //   to: recieverEmail, // list of receivers
  //   //   subject: "Interested In your CD ✔", // Subject line
  //   //   text: `Hello ${recieverName},
  //   //   the user ${userName} is interested in your CD ${specifiedCd}.
  //   //   Is it still available? If so, please contact ${userName} through this email (${senderEmail}).
  //   //   Kind regards,
  //   //   The DiscBook Team`, // plain text body
  //   //   // html: "<b>Hello world?</b>", // html body
  //   // });

  //   console.log("Message sent: %s", info.messageId);

  //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // }

  // main().catch(console.error);

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
                      {cd.forSale ? (
                        <Button variant="info" type="send">
                          Interested In
                        </Button>
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
