import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getPodcasts from './get_podcasts_axios.js';
import clearPodcasts from './send_clear_state.js';
import { actions as podcastsActions } from '../slices/podcasts_all_slice.js';
import { actions as selectedAction } from '../slices/podcast_select_slice.js';

// the goal is FillState - download podcasts and clear state from
// unactual podcasts every 24 hours
const FillState = ({ children }) => {
  const dispatch = useDispatch();

  const lastState = useSelector((state) => {
    const object = state.selectedPodcastsReducer;
    return object;
  });

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

      if (lastState.ids.length > 0) {
        const deleteOldPodcastes = clearPodcasts(lastState);
        dispatch(selectedAction.clearPodcasts({ deleteOldPodcastes }));
      }
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
