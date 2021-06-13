import React from 'react';
import CarouselComp from "../components/Carousel";
import HomeArticle from '../components/HomeArticle'

class Home extends React.Component {

  render() {

    return (
      <>
        <CarouselComp />
        <h1 className="home-title">Wayfarer is...</h1>
        <div className="article-container">
            <HomeArticle />
         
        </div>
      </>
    );
  };
};

export default Home;




