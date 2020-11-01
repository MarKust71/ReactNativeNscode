import React, { useEffect, useState } from 'react';
import { View, Text, UIManager, Platform } from 'react-native';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Rect, Stop, Text as SvgText } from 'react-native-svg';

import { ScreenContainer } from 'ui/common';
import { styles } from 'app/main/Main.styles';
import { CBButtons } from 'app/main/CBButtons';
import { buttonsArray } from 'app/main/buttons';
import { storeData } from 'app/main/storeData';
import { retrieveData } from 'app/main/retrieveData';
import { rtrimNumber } from 'app/main/rtrimNumber';

export const Main = () => {
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const [toBeConsumed, setToBeConsumed] = useState(3);
    const [desiredConsumption] = useState(3);

    const barWidth = 300;
    const fraction = (desiredConsumption - toBeConsumed) / desiredConsumption;
    const consumedFraction = barWidth * fraction;
    // console.log('setDesiredConsumption:', setDesiredConsumption);

    const onPressButton = async (consumed: number) => {
        if (toBeConsumed - consumed > 0) {
            await storeData(toBeConsumed - consumed);
            setToBeConsumed(toBeConsumed - consumed);
            return;
        }
        await storeData(0);
        setToBeConsumed(0);
    };

    const buttons = buttonsArray(onPressButton);

    useEffect(() => {
        const data = async () => {
            const retrievedData = await retrieveData();
            if (retrievedData) {
                setToBeConsumed(retrievedData);
            } else {
                await storeData(3);
            }
        };
        data();
    }, []);

    return (
        <ScreenContainer>
            <View style={styles.containerStyle}>
                <Svg height={250} width={400}>
                    <Defs>
                        <SvgLinearGradient id="grad" x1="0" y1="0" x2="170" y2="0">
                            <Stop offset="0" stopColor="#9CECFB" stopOpacity="1" />
                            <Stop offset="1" stopColor="#65C7F7" stopOpacity="1" />
                            <Stop offset="2" stopColor="#0052D4" stopOpacity="1" />
                        </SvgLinearGradient>
                    </Defs>
                    <Rect
                        x={50}
                        y={50}
                        width={barWidth}
                        height={70}
                        fill="#9CECFB"
                        onLongPress={() => setToBeConsumed(3)}
                    />
                    <Rect
                        x={50}
                        y={50}
                        width={consumedFraction}
                        height={70}
                        fill="#0052D4"
                        onLongPress={() => setToBeConsumed(3)}
                    />
                    <SvgText fill="black" fillOpacity={0.3} fontSize="20" x="200" y="180" textAnchor="middle">
                        Long press the bar to reset progress
                    </SvgText>
                </Svg>
            </View>
            <View style={styles.resultsContainer}>
                <Text style={styles.resultsConsumed}>
                    {rtrimNumber((desiredConsumption - toBeConsumed).toFixed(2))}
                </Text>
                <Text style={styles.resultsToBeConsumed}>/{desiredConsumption}</Text>
            </View>
            <Text style={{ fontSize: 20, color: 'black', opacity: 0.3 }}>How much did you drink?</Text>
            <CBButtons buttons={buttons} />
        </ScreenContainer>
    );
};
