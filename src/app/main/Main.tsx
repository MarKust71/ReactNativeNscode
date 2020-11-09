import React, { useEffect, useState } from 'react';
import { View, Text, UIManager, Platform } from 'react-native';
import Svg, { Defs, LinearGradient as SvgLinearGradient, Rect, Stop, Text as SvgText } from 'react-native-svg';

import { CommonSnackbar, ScreenContainer } from 'ui/common';
import { styles } from 'app/main/Main.styles';
import { CBButtons } from 'app/main/CBButtons';
import { buttonsArray } from 'app/main/buttons';
import { storeData } from 'app/main/storeData';
import { retrieveData } from 'app/main/retrieveData';
import { rtrimNumber } from 'app/main/rtrimNumber';
import { cancelNotifications, setNotification } from 'app/notifications/notification.helpers';

export const Main = () => {
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }

    const [toBeConsumed, setToBeConsumed] = useState(3);
    const [desiredConsumption] = useState(3);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    const dismissSnackbar = () => {
        setSnackbarVisible(false);
    };

    const barWidth = 300;
    const fraction = (desiredConsumption - toBeConsumed) / desiredConsumption;
    const consumedFraction = barWidth * fraction;

    const onPressButton = (consumed: number) => {
        cancelNotifications();
        if (toBeConsumed - consumed > 0) {
            storeData('toBeConsumed', toBeConsumed - consumed)
                .then(() => {
                    setToBeConsumed(toBeConsumed - consumed);
                    setNotification();
                    setSnackbarMessage('You will be notified to drink something within the next 2 hours');
                    setSnackbarVisible(true);
                    return;
                })
                .catch(() => {
                    // handle error
                });
        } else {
            storeData('toBeConsumed', 0)
                .then(() => {
                    setToBeConsumed(0);
                    setSnackbarMessage('You achived your daily plan of watering. CONGRATULATIONS!');
                    setSnackbarVisible(true);
                })
                .catch(() => {
                    // handle error
                });
        }
    };

    const buttons = buttonsArray(onPressButton);

    const handleLongPress = () => {
        storeData('toBeConsumed', 3)
            .then(() => {
                cancelNotifications();
                setToBeConsumed(3);
                setSnackbarMessage('All notifications cancelled. Tap the bar to set new reminder');
                setSnackbarVisible(true);
            })
            .catch(() => {
                // handle error
            });
    };

    const handlePress = () => {
        if (toBeConsumed === 3) {
            setNotification();
            setSnackbarMessage('New reminder set. You will be notified to drink something within the next 2 hours');
            setSnackbarVisible(true);
        }
    };

    useEffect(() => {
        /*
        const data = async () => {
            const retrievedData = await retrieveData('toBeConsumed');
            if (retrievedData) {
                setToBeConsumed(retrievedData);
                console.log('retrieved:', retrievedData);
            } else {
                await storeData('toBeConsumed', 3);
            }
        };
        data();
*/
        retrieveData('toBeConsumed').then((result) => {
            if (result) {
                console.log('result:', result);
                setToBeConsumed(result);
            }
        });
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
                        onLongPress={handleLongPress}
                        onPress={handlePress}
                    />
                    <Rect
                        x={50}
                        y={50}
                        width={consumedFraction}
                        height={70}
                        fill="#0052D4"
                        onLongPress={handleLongPress}
                        onPress={handlePress}
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
            <Text style={styles.resultsQuestion}>How much did you drink?</Text>
            <CBButtons buttons={buttons} />
            <CommonSnackbar
                message={snackbarMessage}
                visible={snackbarVisible}
                onDismissSnackBar={dismissSnackbar}
                action={{
                    label: 'Close',
                    onPress: () => {
                        //
                    },
                }}
            />
        </ScreenContainer>
    );
};
