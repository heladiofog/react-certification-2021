import React, { useRef } from 'react';
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
  // Waiting for Google Api...if the case
  if (!googleApi) {
    console.log('no gapi!');
    return <h2>Loading videos...</h2>;
  }

  return (
    <section className="homepage" ref={sectionRef}>
      <h1>Hello Mini-Challenge 3!</h1>
      {/* <p>You are searching for: {searchText}</p> */}
      {/* <p>Youtube API: {process.env.REACT_APP_YOUTUBE_API_KEY}</p> */}
      <VideoList />
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
