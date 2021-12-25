import React, { useState, useContext } from "react";
import HeaderContainer from "../containers/header";
import FooterContainer from "../containers/footer";
import { Form } from "../components";

import axios from "axios";
import { TokenContext } from "../App";
import { useHistory } from "react-router-dom";

async function loginUser(credentials) {
  return axios
    .post("http://127.0.0.1:8000/accounts/login/", credentials)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      alert("Invalid Credentials");
      return "invalid login";
    });
}

function Signin() {
  const history = useHistory();
  const { token, setToken } = useContext(TokenContext);

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleSignIn = async (event) => {
    event.preventDefault();

    if (emailAddress !== "" && password !== "") {
      const token = await loginUser({
        email: emailAddress,
        password,
      });

      if (token !== "invalid login") {
        setToken(token);
        history.push("/browse");
      }
    }
  };

  // check form input elements are valid
  // email & password

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title style={{ background: "transparent" }}>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              autocomplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}

export default Signin;
