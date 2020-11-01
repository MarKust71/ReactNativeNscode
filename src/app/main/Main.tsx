import React, { useEffect, useState } from 'react';
import { View, Text, UIManager, Platform } from 'react-native';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Rect, Stop, Text as SvgText } from 'react-native-svg';
import AsyncStorage from '@react-native-community/async-storage';

import { ScreenContainer } from 'ui/common';
import { styles } from 'app/main/Main.styles';
import { CBButtons } from 'app/main/CBButtons';
// import { Notifications } from 'react-native-notifications';

export const Main = () => {
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const [toBeConsumed, setToBeConsumed] = useState<number | null>(3);
    const [desiredConsumption, setDesiredConsumption] = useState(3);

    const barWidth = 300;
    const fraction = (desiredConsumption - (toBeConsumed || 0)) / desiredConsumption;
    const toBeConsumedFraction = barWidth * fraction;
    console.log('setDesiredConsumption:', setDesiredConsumption);

    const storeData = async (value: number) => {
        console.log('store:', value);
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

    /*
    const disableNotification = () => {
        // Notifications.removeAllDeliveredNotifications();
        // Notifications.cancelAllScheduledNotificationsAsync();
    };
*/

    /*
    const enableNotification = () => {
        // Notifications.removeAllDeliveredNotifications();
        //     Notifications.cancelAllScheduledNotificationsAsync();
    };
*/

    const onPressButton = async (consumed: number) => {
        if (toBeConsumed || 0 > 0) {
            const _toBeConsumed = toBeConsumed || 0 - consumed;
            if (_toBeConsumed > 0) {
                await storeData(_toBeConsumed);
                setToBeConsumed(_toBeConsumed);
            } else {
                await storeData(0);
                setToBeConsumed(0);
            }
        }

        console.log('consumed:', consumed);
    };

    const buttons = [
        {
            text: '0.25 L',
            onPress: () => {
                onPressButton(0.25);
            },
            colors: ['#0052D4', '#0052D4'],
        },
        {
            text: '0.50 L',
            onPress: () => {
                onPressButton(0.5);
            },
            colors: ['#0052D4', '#0052D4'],
        },
        {
            text: '0.75 L',
            onPress: () => {
                onPressButton(0.75);
            },
            colors: ['#0052D4', '#0052D4'],
        },
        {
            text: '1 L',
            onPress: () => {
                onPressButton(1);
            },
            colors: ['#0052D4', '#0052D4'],
        },
    ];

    useEffect(() => {
        const data = async () => {
            await storeData(1);
            const retrievedData = await retrieveData();
            if (retrievedData) {
                // const _toBeConsumed = await retrieveData();
                // setToBeConsumed(_toBeConsumed);
                setToBeConsumed(retrievedData);
            } else {
                // enableNotification();
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
            <Text>
                toBeConsumed: {toBeConsumed}, desiredConsumption: {desiredConsumption}
            </Text>
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
            {/*
            <View style={styles.notificationViewStyle}>
                <TouchableOpacity onPress={enableNotification}>
                    <Text style={styles.notificationEnableTextStyle}>ENABLE NOTIFICATIONS</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={disableNotification}>
                    <Text style={styles.notificationDisableTextStyle}>DISABLE NOTIFICATIONS</Text>
                </TouchableOpacity>
            </View>
*/}
            <CBButtons buttons={buttons} />
        </ScreenContainer>
    );
};
