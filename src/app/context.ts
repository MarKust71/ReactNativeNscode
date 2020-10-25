import React from 'react';

type ContextProps = {
    contextUserToken: string;
    setContextUserToken: (token: string) => void;
    signOut: () => void;
};

export const AuthContext = React.createContext<ContextProps>({
    contextUserToken: '',
    setContextUserToken: () => {},
    signOut: () => {},
});
