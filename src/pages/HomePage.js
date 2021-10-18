import React from 'react';
import Header from "ui/Header.js"
import Banner from "ui/Banner.js"
import MediaSlider from 'ui/MediaSlider';
function HomeScreen() {
  return(
    <div>
      <Header/>
      <Banner/>
      <MediaSlider
      mediaType="tv"
      title="NETFLIX ORIGINALS"
      path="/discover/tv"
      params={{with_networks:213}}
      isLarge
      />
      <MediaSlider
      title="Trending Now"
      path="/trending/all/week"
     />
     <MediaSlider
      title="Top Rated"
      path="/movie/top_rated"
     />
     <MediaSlider
      title="Action Movies"
      path="/discover/movie"
      params={{with_genre:28}}
     />
    </div>
  );
}

export default HomeScreen;
