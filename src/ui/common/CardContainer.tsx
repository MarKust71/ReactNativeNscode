import React from 'react';
import { View } from 'react-native';

import { styles } from 'ui/common/CardContainer.styles';

export const CardContainer = ({ children }) => {
    return <View style={styles.containerStyle}>{children}</View>;
};
