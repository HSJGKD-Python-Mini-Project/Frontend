import React,{useContext} from "react";
import {useHistory} from 'react-router-dom';
import { Feature, OptForm } from "../components";
import HeaderContainer from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import FaqsContainer from "../containers/faqs";
import FooterContainer from "../containers/footer";
import {TokenContext} from '../App';

function Home() {
  const history = useHistory();
  const {token, setToken} = useContext(TokenContext);

  if(token!=='undefined'){
    history.push('/browse')
  }

  return (
    <>
      <HeaderContainer styles={{ background: "transparent" }}>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel any time.</Feature.SubTitle>
          <OptForm style={{ background: "transparent" }}>
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Try it now</OptForm.Button>
            <OptForm.Break />
            <OptForm.Text style={{ background: "transparent" }}>
              Ready to watch? Enter your email to create or restart your
              membership.
            </OptForm.Text>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}

export default Home;
