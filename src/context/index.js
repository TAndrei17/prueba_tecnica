import { createContext } from 'react';

const StatusContext = createContext({
  statusState: {},
});

const statusState = {
  filterChannels: 'inactive',
  search: '',
  lng: 'es',
};

export default StatusContext;
export { statusState };
