import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import getPodcasts from './get_podcasts_axios';
import { actions as podcastsActions } from '../slices/podcasts_all_slice.js';

const UpdateState = ({ children }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);

  useEffect(() => {
    // the function produces promise, but useEffect should not produce something;
    // that reason use 'setPodcasts';

    // a verify should be before 'setPodcasts'
    const setPodcasts = async () => {
      const normalizeData = await getPodcasts();

      // verify time of last loading
      // if it more than 24 hours update state
      // 07/04/23 - it will not work! Need to save a moment in context!
      const currentTime = new Date().getTime();
      if (currentTime - normalizeData.loadTime >= 8.64e+7) {
        setCount(count + 1);
      }

      dispatch(podcastsActions.addPodcasts({
        entities: normalizeData.allPodcasts,
        ids: Object.keys(normalizeData.allPodcasts),
      }));
    };
    setPodcasts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return children;
};

export default UpdateState;
