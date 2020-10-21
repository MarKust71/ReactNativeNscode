import React from 'react';

type ContextProps = {
    userToken: string;
    setUserToken: (token: string) => void;
};

export const AuthContext = React.createContext<ContextProps>({
    userToken: '',
    setUserToken: () => {},
});
