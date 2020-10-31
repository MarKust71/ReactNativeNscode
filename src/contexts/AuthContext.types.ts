export type ContextProps = {
    signIn: () => void;
    signOut: () => void;
    contextUserToken: string;
    // setContextUserToken: (token: string) => void;
    contextUser: string;
    // setContextUser: (user: string) => void;
};
