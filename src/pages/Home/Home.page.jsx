import React, { useRef, useEffect, useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';

// import { useAuth } from '../../providers/Auth';
import { useGoogleApi } from '../../utils/hooks/useGoogleApi';
import './Home.styles.css';

import VideoList from '../../components/VideoList';

function HomePage() {
  // Original sections
  // const history = useHistory();
  const sectionRef = useRef(null);
  // const { authenticated, logout } = useAuth();

  // function deAuthenticate(event) {
  //   event.preventDefault();
  //   logout();
  //   history.push('/');
  // }
  // End Original sectiion

  // Mini-challenge3
  // const [searchText, setSearchText] = useState('');
  // Google APi loading...
  const googleApi = useGoogleApi();
  // Load videos by default
  const [videoList, setVideoList] = useState([]);
  // const [searchText, setSearchText] = useState('Wizeline');
  const searchText = 'JulioAstillero';
  useEffect(() => {
    // Did Mount and so far...
    async function fetchVideos(searchTerm) {
      try {
        const { result } = await googleApi.client.youtube.search.list({
          part: ['id', 'snippet'],
          maxResults: 25,
          q: searchTerm,
        });
        // look for videos only: https://developers-dot-devsite-v2-prod.appspot.com/youtube/v3/docs/search#resource
        const videos = result.items.filter((video) => video.id.kind === 'youtube#video');
        console.log('[Result:]', result);

        setVideoList(videos);
      } catch (error) {
        console.error('Something went wrong with videos fetching!', error);
        return null;
      }
    }

    fetchVideos(searchText);
  });

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Hello Mini-Challenge 3!</h1>
      {/* <p>You are searching for: {searchText}</p> */}
      {/* <p>Youtube API: {process.env.REACT_APP_YOUTUBE_API_KEY}</p> */}
      <VideoList videos={videoList} />
      {/* {authenticated ? (
        <>
          <h2>Good to have you back</h2>
          <span>
            <Link to="/" onClick={deAuthenticate}>
              ← logout
            </Link>
            <span className="separator" />
            <Link to="/secret">show me something cool →</Link>
          </span>
        </>
      ) : (
        <Link to="/login">let me in →</Link>
      )} */}
    </section>
  );
}

export default HomePage;
