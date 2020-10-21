import React, { useState } from 'react';

import { Button, Card, CardSection, Input } from '../common';

export const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <Card>
            <CardSection>
                <Input
                    placeholder="email address"
                    secureTextEntry={false}
                    label="E-mail:"
                    value={email}
                    onChangeText={(value) => {
                        setEmail(value);
                    }}
                />
            </CardSection>
            <CardSection>
                <Input
                    placeholder="password"
                    secureTextEntry={true}
                    label="Password:"
                    value={password}
                    onChangeText={(value) => {
                        setPassword(value);
                    }}
                />
            </CardSection>
            <CardSection>
                <Button
                    onPress={() => {
                        console.log('oki');
                    }}
                >
                    Log In
                </Button>
            </CardSection>
        </Card>
    );
};
