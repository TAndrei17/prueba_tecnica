import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import getPodcasts from './get_podcasts_axios';
import { actions as podcastsActions } from '../slices/podcasts_all_slice.js';

const FillState = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalCallback = () => {
      const setPodcasts = async () => {
        const normalizeData = await getPodcasts();

        dispatch(podcastsActions.addPodcasts({
          entities: normalizeData.allPodcasts,
          ids: Object.keys(normalizeData.allPodcasts),
        }));
      };
      setPodcasts();
    };
    intervalCallback();
    const intervalId = setInterval(intervalCallback, 24 * 3600 * 1000);
    return () => {
      clearInterval(intervalId);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
};

export default FillState;
