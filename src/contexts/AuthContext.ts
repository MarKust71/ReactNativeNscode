import React from 'react';

import { ContextProps } from 'contexts/AuthContext.types';

export const AuthContext = React.createContext<ContextProps>({
    value: { signIn: () => {}, signOut: () => {}, contextUserToken: '', contextUser: '' },
    setValue: () => {},
});
