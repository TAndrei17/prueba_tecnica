import url from 'url';

const { URL } = url;

const linkPodcasts = 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json';
export const podcasts = new URL(linkPodcasts);




