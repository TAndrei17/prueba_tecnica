import { useState } from 'react';

import StatusContext, { statusState } from './index.js';

/* eslint-disable */
const StatusProvider = ({ children }) => {
  const { podcastsLoadTime } = statusState;

  const [loadTime, setTime] = useState(podcastsLoadTime);
  const updateLoadTime = () => setTime(statusState.authorization = new Date().getTime());

  const contextStatus = {
    statusState,
    loadTime, updateLoadTime
  };

  return (
    <StatusContext.Provider value={contextStatus}>
      {children}
    </StatusContext.Provider>
  );
};

export default StatusProvider;