import React from 'react';
import { View } from 'react-native';

import { styles } from 'app/main/Main.styles';
import { CBButton } from 'app/main/CBButton';
import { CBButtonType } from 'app/main/CBButton.types';

type Props = {
    buttons: CBButtonType[];
};

export const CBButtons = (props: Props) => {
    const { buttons } = props;
    return (
        <View style={styles.buttonGroup}>
            {buttons.map((button) => (
                <CBButton key={button.text} onPress={button.onPress} colors={button.colors} text={button.text} />
            ))}
        </View>
    );
};
