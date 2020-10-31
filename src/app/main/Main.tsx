import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, UIManager, Platform } from 'react-native';
import Svg, { Defs, LinearGradient, Rect, Stop, Text as SvgText } from 'react-native-svg';
import AsyncStorage from '@react-native-community/async-storage';

import { ScreenContainer } from 'ui/common';
import { styles } from 'app/main/Main.styles';

export const Main = () => {
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const [toBeConsumed, setToBeConsumed] = useState<number | null>(3);
    const [desiredConsumption, setDesiredConsumption] = useState(3);

    const barWidth = 300;
    const fraction = (desiredConsumption - (toBeConsumed || 0)) / desiredConsumption;
    const toBeConsumedFraction = barWidth * fraction;
    console.log(setDesiredConsumption);

    const storeData = async (value: number) => {
        try {
            await AsyncStorage.setItem('toBeConsumed', String(value));
            console.log('storing works');
        } catch (error) {
            console.log(error);
        }
    };

    const retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('toBeConsumed');
            console.log('retrieval works');
            if (value !== null) {
                return Number(value);
            } else {
                return null;
            }
        } catch (error) {
            console.log(error);
            return null;
        }
    };

    const disableNotification = () => {
        // Notifications.cancelAllScheduledNotificationsAsync();
    };

    const enableNotification = () => {
        //     Notifications.cancelAllScheduledNotificationsAsync();
    };

    useEffect(() => {
        const data = async () => {
            if (await retrieveData()) {
                const _toBeConsumed = await retrieveData();
                setToBeConsumed(_toBeConsumed);
            } else {
                enableNotification();
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
                        <LinearGradient id="grad" x1="0" y1="0" x2="170" y2="0">
                            <Stop offset="0" stopColor="#9CECFB" stopOpacity="1" />
                            <Stop offset="1" stopColor="#65C7F7" stopOpacity="1" />
                            <Stop offset="2" stopColor="#0052D4" stopOpacity="1" />
                        </LinearGradient>
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
                        width={toBeConsumedFraction}
                        height={70}
                        fill="#0052D4"
                        onLongPress={() => setToBeConsumed(3)}
                    />
                    <SvgText fill="black" fillOpacity={0.3} fontSize="20" x="200" y="180" textAnchor="middle">
                        Long press to reset progress.
                    </SvgText>
                </Svg>
            </View>
            <View
                style={{
                    flex: 1 / 3,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text style={{ fontSize: 100, fontWeight: '600' }}>{desiredConsumption - (toBeConsumed || 0)}</Text>
                <Text style={{ fontSize: 50, fontWeight: '400' }}>/{desiredConsumption}</Text>
            </View>
            <View style={styles.notificationViewStyle}>
                <TouchableOpacity onPress={enableNotification}>
                    <Text style={styles.notificationEnableTextStyle}>ENABLE NOTIFICATIONS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={disableNotification}>
                    <Text style={styles.notificationDisableTextStyle}>DISABLE NOTIFICATIONS</Text>
                </TouchableOpacity>
            </View>
        </ScreenContainer>
    );
};
