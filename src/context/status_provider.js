import { useState } from 'react';

import StatusContext, { statusState } from './index.js';

/* eslint-disable */
const StatusProvider = ({ children }) => {
  const { podcastsLoadTime, filterChannels } = statusState;

  const [loadTime, setTime] = useState(podcastsLoadTime);
  const updateLoadTime = () => setTime(statusState.authorization = new Date().getTime());
  
  const [filter, setFilter] = useState(filterChannels);
  const makeActive = () => setFilter(statusState.filterChannels = 'active');
  const makeInactive = () => setFilter(statusState.filterChannels = 'inactive');

  const contextStatus = {
    statusState,
    loadTime,
    updateLoadTime,
    filter,
    makeActive,
    makeInactive,
  };

  return (
    <StatusContext.Provider value={contextStatus}>
      {children}
    </StatusContext.Provider>
  );
};

export default StatusProvider;