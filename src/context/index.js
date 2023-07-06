import { createContext } from 'react';

const StatusContext = createContext({
  statusState: {},
});

const statusState = {
  filterChannels: 'inactive',
  search: '',
  lng: 'sp',
};

export default StatusContext;
export { statusState };
