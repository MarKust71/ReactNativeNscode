export type SnackbarAction = {
    label: string;
    onPress: () => void;
};

export type CommonSnackbarProps = {
    message: string;
    visible: boolean;
    onDismissSnackBar: () => void;
    action?: SnackbarAction;
};
