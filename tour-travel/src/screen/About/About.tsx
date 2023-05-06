import React from "react";
import "./About.css";
import AboutMe from "../../assets/images/AboutMe.jpg";
interface Props {}
const About: React.FC<Props> = () => {
  return (
    <div id="about">
      <div id="headingOne">
        <h1>About me</h1>
      </div>
      <div id="headingTwo">
        <h2>Hi everyone!I am Soumya</h2>
      </div>
      <div id="imageDesc">
        <div id="descImg">
          <img src={AboutMe} alt="soumya" id="myImage" />
        </div>
        <div id="desc">
          <em>
            I am a software Engineer who likes to Travel, I love going on long
            drives ,observing new places, and experiencing the beauty and
            serenity of the place in silence ,I am an avid reader,that's why I
            think every place wants to tell you a story so you just sit and
            listen ,let the nature do all the talking!
          </em>
        </div>
      </div>
    </div>
  );
};
export default About;
