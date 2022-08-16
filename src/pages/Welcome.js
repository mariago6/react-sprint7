import React from 'react'; 
import Navbar from '../components/Navbar';
import {WelcomeTitle, WelcomeText, WelcomeBox, WelcomeFondo, WelcomeImage} from '../styled'



function Welcome() {
  return (
    <WelcomeFondo>
      <Navbar />
      <WelcomeBox>
        <article>
          <WelcomeTitle> Welcome</WelcomeTitle>
          <WelcomeText>The online marketing agency that you've been looking for!</WelcomeText>
          <WelcomeText>How can we help you?</WelcomeText>
          <WelcomeText>Click on "Services" to find out</WelcomeText>
        </article>
        <WelcomeImage alt='pc' src='./images/pc.jpg'/>
      </WelcomeBox>
    </WelcomeFondo>
  );
}

export default Welcome; 