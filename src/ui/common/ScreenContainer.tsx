import React from 'react';
import { View } from 'react-native';

import { styles } from 'ui/common/ScreenContainer.styles';
import { Children } from 'app/common/Children.types';

export const ScreenContainer = ({ children }: Children) => {
    return <View style={styles.container}>{children}</View>;
};
