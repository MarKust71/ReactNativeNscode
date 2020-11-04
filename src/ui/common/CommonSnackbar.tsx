import React from 'react';
import { Snackbar } from 'react-native-paper';

import { CommonSnackbarProps as Props } from 'ui/common/CommonSnackbar.types';

export const CommonSnackbar = (props: Props) => {
    const { message, visible, onDismissSnackBar, action } = props;

    return (
        <Snackbar visible={visible} onDismiss={onDismissSnackBar} duration={4000} action={action}>
            {message}
        </Snackbar>
    );
};
