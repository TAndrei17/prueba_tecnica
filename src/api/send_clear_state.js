const clearPodcasts = (object) => {
  const currentTime = new Date().getTime();
  const { entities } = object;

  Object.values(entities)
    .filter((podcast) => currentTime - Number(podcast.time) < 8.64e+7)
    .reduce((acc, podcast) => {
      const { id } = podcast;
      if (!acc.entities) {
        acc.entities = {};
      }
      acc.entities[id] = podcast;
      if (!acc.ids) {
        acc.ids = [];
      }
      acc.ids.push(id);
      return acc;
    }, {});
};

export default clearPodcasts;
