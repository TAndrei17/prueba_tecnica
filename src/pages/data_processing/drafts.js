/* const clearPodcasts = (object) => {
  const currentTime = new Date().getTime();
  const { entities } = object;
  // console.log(Object.values(entities));
  Object.values(entities)
    .filter((podcast) => currentTime - Number(podcast.time) < 8.64e+7)
    .reduce((acc, podcast) => {
      const { id } = podcast;
      acc.ids = [];
      acc.ids.push(id);
      acc.entities[id] = podcast;
      return acc;
    }, {});
};

const freshState = clearPodcasts(lastState);
dispatch(selectedAction.clearPodcasts({ freshState })); */
