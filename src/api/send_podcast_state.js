import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getPodcastData from './get_podcast_axios.js';
import getPodcastEpisodes from './get_episodes_axios.js';
import { actions as selectedAction } from '../slices/podcast_select_slice.js';
import { actions as episodesAction } from '../slices/episodes_select_slice.js';

const isActualOne = (object, id) => {
  const activeId = object.ids.filter((item) => item === id);
  if (activeId.length > 0) {
    const { entities } = object;
    const { time } = entities[id];
    const currentTime = new Date().getTime();
    return currentTime - Number(time) < 8.64e+7;
  }
  return false;
};

const FillPodcastState = ({ children }) => {
  const dispatch = useDispatch();

  const activePodcast = useSelector((state) => {
    const getPodcast = state.activePodcastReducer.activePodcast;
    return getPodcast;
  });

  // the goal 'isActualOne' is not to get data on every render
  const lastState = useSelector((state) => {
    const object = state.selectedPodcastsReducer;
    return object;
  });

  useEffect(() => {
    if (!isActualOne(lastState, activePodcast)) {
      const downloadPodcast = async () => {
        const getDataJson = await getPodcastData(activePodcast);
        const { podcastDescription } = getDataJson;
        const { xmlLink } = podcastDescription;

        const getDataXml = await getPodcastEpisodes(xmlLink, activePodcast);
        const { description } = getDataXml;
        podcastDescription.description = description;

        dispatch(selectedAction.updatePodcasts({ podcastDescription }));

        const prepareData = getDataXml.ids
          .map((id) => getDataXml[id])
          .reduce((acc, body) => {
            const { id } = body;
            if (!acc.entities) {
              acc.entities = {};
            }
            acc.entities[id] = body;
            if (!acc.ids) {
              acc.ids = [];
            }
            const { ids } = getDataXml;
            acc.ids = ids;
            return acc;
          }, {});

        dispatch(episodesAction.addEpisodes({
          entities: prepareData.entities,
          ids: prepareData.ids,
        }));
      };
      downloadPodcast();
    }
  });

  return children;
};

export default FillPodcastState;
