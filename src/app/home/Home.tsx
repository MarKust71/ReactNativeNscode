import React, { useContext, useEffect, useState } from 'react';
import { Button, Text } from 'react-native-paper';

import { ScreenContainer } from 'ui/common';
import { AuthContext } from 'contexts/AuthContext';
import { HomeProps as Props } from 'app/home/ShowToken.types';

export const Home = ({ navigation }: Props) => {
    const context = useContext(AuthContext);
    const [user, setUser] = useState('');
    // const { signOut, contextUser } = useContext(AuthContext);
    // console.log(contextUser);
    //
    useEffect(() => {
        console.log('context:', context);
        if (user) {
            setUser(context.contextUser);
        }
    }, []);

    return (
        <AuthContext.Consumer>
            {(context) => (
                <ScreenContainer>
                    <Text>Welcome home!</Text>
                    <Text>You are signed in as {context.contextUser}</Text>
                    <Button
                        onPress={() => {
                            navigation.push('ShowToken');
                        }}
                    >
                        Show Token
                    </Button>
                    <Button onPress={() => {}}>Menu option #2</Button>
                    {/* <CustomButton title="Drawer" onPress={() => navigation.toggleDrawer()} /> */}
                    <Button mode="contained" onPress={() => context.signOut()}>
                        Sign Out
                    </Button>
                </ScreenContainer>
            )}
        </AuthContext.Consumer>
    );
};
