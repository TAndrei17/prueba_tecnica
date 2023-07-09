import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import getPodcastData from './get_selected_axios.js';
import getPodcastEpisodes from './get_episodes_axios.js';
import { actions as selectedAction } from '../slices/podcasts_selected_slice.js';

const isActualOne = (object, id) => {
  const activeId = object.ids.filter((item) => item === id);
  if (activeId.length > 0) {
    const { entities } = object;
    const { time } = entities[id]; // don't forget 'time'!
    const currentTime = new Date().getTime();
    return currentTime - Number(time) < 8.64e+7;
  }
  return false;
};

const FillActiveState = ({ children }) => {
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

        const getDataXml = await getPodcastEpisodes(xmlLink);
        const { description } = getDataXml;
        podcastDescription.description = description;

        // нужно обойти обьект эпизодов и добавить вторичный ключ подкаста
        // потом dispatch

        dispatch(selectedAction.updatePodcasts({ podcast: podcastDescription }));

        // const getDataXml = await getXmlData(xmlLink);
        // console.log(getDataXml);
      };
      downloadPodcast();
    }
  });

  return children;
};

export default FillActiveState;
