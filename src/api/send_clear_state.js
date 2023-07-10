import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions as selectedAction } from '../slices/podcasts_selected_slice.js';

const clearPodcasts = (object) => {
  const currentTime = new Date().getTime();
  const { entities } = object;
  const idsOld = Object.values(entities)
    .filter((podcast) => currentTime - Number(podcast.time) > 8.64e+7)
    .map((podcast) => podcast.id);

  // console.log(Object.values(entities));
  Object.values(entities)
    .filter((podcast) => currentTime - Number(podcast.time) < 8.64e+7)
    .reduce((acc, podcast) => {
      const { id } = podcast;
      acc.ids = [];
      acc.ids.push(id);
      acc.entities[id] = podcast;
      acc.idsOld = idsOld;
      return acc;
    }, {});
};

const ClearState = ({ children }) => {
  const dispatch = useDispatch();

  const lastState = useSelector((state) => {
    const object = state.selectedPodcastsReducer;
    return object;
  });

  useEffect(() => {
    if (lastState.ids.length > 0) {
      const deleteOldPodcastes = clearPodcasts(lastState);

      dispatch(selectedAction.clearPodcasts({ deleteOldPodcastes }));
    }
  });

  return children;
};

export default ClearState;
