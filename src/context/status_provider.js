import { useMemo } from 'react';
import StatusContext, { statusState } from './index.js';

const StatusProvider = ({ children }) => {
  const contextStatus = useMemo(() => ({ statusState }), []);

  return (
    <StatusContext.Provider value={contextStatus}>
      {children}
    </StatusContext.Provider>
  );
};

export default StatusProvider;
