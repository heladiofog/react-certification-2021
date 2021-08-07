import { useState, useEffect } from 'react';

function useGoogleApi() {
  const [googleApi, setGoogleApi] = useState(null);

  useEffect(() => {
    // From Youtube docs sample codes...
    // function loadClient() {
    //   // Setting API Key
    //   window.gapi.client.setApiKey(process.env.REACT_APP_YOUTUBE_API_KEY);

    //   return window.gapi.client
    //     .load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
    //     .then(
    //       () => {
    //         console.log('GAPI client loaded for API');
    //         setGoogleApi(window.gapi);
    //       },
    //       (err) => {
    //         console.error('Error loading GAPI client for API:', err);
    //       }
    //     );
    // }
    // Wizeline's way...in order ti force to wait until gapi cient is fully loaded
    async function initGoogleApi() {
      try {
        await window.gapi.client.setApiKey(process.env.REACT_APP_YOUTUBE_API_KEY);

        await window.gapi.client.load(
          'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
        );
        console.log('GAPI client loaded for API');
        setGoogleApi(window.gapi);
      } catch (error) {
        console.error('Google Api could not be loaded...: ', error);
      }
    }
    // window.gapi.load('client:auth2', initGoogle);

    // loading Google Api
    // 1. Load the JavaScript client library.
    // window.gapi.load('client', loadClient);
    window.gapi.load('client', initGoogleApi);
  }, []); // el efecto se llama solo una vez...

  return googleApi;
}

export { useGoogleApi };
