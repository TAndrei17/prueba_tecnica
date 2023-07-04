import { createContext } from 'react';

const StatusContext = createContext({
  statusState: {},
});

const statusState = {
  podcastsLoadTime: 0,
  filterChannels: 'inactive',
  lng: 'sp',
};

export default StatusContext;
export { statusState };