import React from 'react';
import { View, Text } from 'react-native';
import styles from './HeaderStyles';

const header = () => (
    <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>Todo App</Text>
    </View>
);

export default header;