import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import getPodcasts from './get_podcasts_axios';
import { actions as podcastsActions } from '../slices/podcasts_all_slice.js';

const UpdateState = ({ children }) => {
  const dispatch = useDispatch();
  // count is updating 1 time in 24 hours
  // useEffects works again when count is changed
  const [count, setCount] = useState(0);
  setInterval(() => setCount(count + 1), 8.64e+7);

  useEffect(() => {
    const setPodcasts = async () => {
      const normalizeData = await getPodcasts();

      dispatch(podcastsActions.addPodcasts({
        entities: normalizeData.allPodcasts,
        ids: Object.keys(normalizeData.allPodcasts),
      }));
    };
    setPodcasts();
    // // here is a problem - [count] gives rerendings...
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return children;
};

export default UpdateState;
