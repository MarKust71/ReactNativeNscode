import React from 'react';
import { View } from 'react-native';

import { styles } from 'ui/common/CardSection.styles';

export const CardSection = ({ children }) => {
    return <View style={styles.containerStyle}>{children}</View>;
};
