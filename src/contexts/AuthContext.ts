import React from 'react';

import { ContextProps } from 'contexts/AuthContext.types';

export const AuthContext = React.createContext<ContextProps>({
    contextUserToken: '',
    setContextUserToken: () => {},
    signOut: () => {},
});
