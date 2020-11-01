export const buttonsArray = (onPressButton: (volume: number) => void) => {
    return [
        {
            text: '0.10 L',
            onPress: () => {
                onPressButton(0.1);
            },
            colors: ['#0052D4', '#0052D4'],
        },
        {
            text: '0.20 L',
            onPress: () => {
                onPressButton(0.2);
            },
            colors: ['#0052D4', '#0052D4'],
        },
        {
            text: '0.33 L',
            onPress: () => {
                onPressButton(0.33);
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
    ];
};
