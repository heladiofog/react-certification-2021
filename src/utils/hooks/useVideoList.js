import { useState, useEffect } from 'react';

function useVideoList() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    async function fetchVideoList() {
      try {
        const response = await fetch(API_URL);
        const fortuneCookies = await response.json();

        const randomIndex = random(fortuneCookies.length);
        const currentFortune = fortuneCookies[randomIndex];

        setVideoList(currentFortune.message);
      } catch (error) {
        console.error('Bad fortune: ', error);
      }
    }

    fetchVideoList();
    // WZL
    export const fetchVideosAction = (dispatch) => async (searchTerm) => {
      dispatch({ type: ACTIONS.FETCH_VIDEOS });

      try {
        const { result } = await window.gapi.client.youtube.search.list({
          part: ['id', 'snippet'],
          maxResults: 25,
          q: searchTerm,
        });
        const videos = result.items
          .filter((video) => video.id.kind === 'youtube#video')
          .map(mapVideo);

        dispatch({
          type: ACTIONS.FETCH_VIDEOS_SUCCESS,
          payload: { videos },
        });
        return videos;
      } catch (error) {
        dispatch({
          type: ACTIONS.FETCH_VIDEOS_ERROR,
          payload: { error: error.message },
        });
        return null;
      }
    };
  }, []);

  return { videoList };
}

export { useVideoList };
