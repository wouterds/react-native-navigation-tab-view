// @flow
import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './styles';

const ScreenD = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.content}>
          <Text style={styles.title}>Screen D</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ScreenD;
