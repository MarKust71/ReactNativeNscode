import React from 'react';

type ContextProps = {
    logIn: () => void;
};

export const AuthContext = React.createContext<ContextProps>({ logIn: () => console.log('logIn from context') });
