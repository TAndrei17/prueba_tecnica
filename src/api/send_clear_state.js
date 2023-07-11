const clearPodcasts = (object) => {
  const currentTime = new Date().getTime();
  const { entities } = object;
  const idsOld = Object.values(entities)
    .filter((podcast) => currentTime - Number(podcast.time) > 8.64e+7)
    .map((podcast) => podcast.id);

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

export default clearPodcasts;
