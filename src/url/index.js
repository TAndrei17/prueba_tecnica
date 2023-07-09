// import { URL } from 'url';

const linkPodcasts = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';

const createUrlPodcast = (id) => `https://itunes.apple.com/lookup?id=${id}`;

/* const createUrlPodcast = (id) => {
  const hostITunes = 'https://itunes.apple.com';
  const url = new URL(hostITunes);
  url.pathname = '/lookup';
  url.search = `?id=${id}`;
  return url;
}; */

export { linkPodcasts, createUrlPodcast };
