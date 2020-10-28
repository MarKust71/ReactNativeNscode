import React from 'react';
import { View } from 'react-native';

import { styles } from 'ui/common/ScreenContainer.styles';

export const ScreenContainer = ({ children }) => {
    return <View style={styles.container}>{children}</View>;
};
