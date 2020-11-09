export type SignInFormProps = {
    loading: boolean;
    email: string;
    password: string;
    errorMessage: string;
    handlePress: () => void;
    handleChangeTextEmail: (value: string) => void;
    handleChangeTextPassword: (value: string) => void;
};
