import { Fragment } from "react";
import EventContainer from "../Components/EventContainer";
import AboutContainer from "../Components/AboutContainer";
import "../Css/Home.css";
import LeaderContainer from "../Components/LeaderContainer";
import BlogContainer from "../Components/BlogContainer";
import NoCounting from "../Components/NoCounting";
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <Fragment>
      <video autoPlay muted loop>
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="event-container">
        <EventContainer />
      </div>
      <div className="about-container">
        <AboutContainer />
      </div>
      <div className="team-container">
        <LeaderContainer />
      </div>
      <div className="blog-container">
        <BlogContainer />
      </div>
      <div className="count-container">
        <NoCounting />
      </div>
      <Footer />
    </Fragment>
  );
};

export default Home;
