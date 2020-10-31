import React from 'react';
import './App.css';
import Banner from './Banner';
import requests from './request';
import Row from './Row'
import Navbar from './Navbar'
// import logo from './logo.svg';

function App() {
  return (
    <div className="app">
      {/* <h1>Hello World</h1> */}
      <Navbar />
      <Banner />

      <Row title='Netflix Original' fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow={true} 
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      {/* <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romantic Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documantries' fetchUrl={requests.fetchDocumantries} /> */}

    </div>
  );
}

export default App;
