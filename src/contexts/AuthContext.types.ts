import { Dispatch, SetStateAction } from 'react';

export type ContextProps = {
    value: { signIn: () => void; signOut: () => void; contextUserToken: string; contextUser: string };
    setValue: Dispatch<
        SetStateAction<{ signIn: () => void; signOut: () => void; contextUserToken: string; contextUser: string }>
    >;
};
