export type ContextProps = {
    contextUserToken: string;
    setContextUserToken: (token: string) => void;
    signOut: () => void;
};
