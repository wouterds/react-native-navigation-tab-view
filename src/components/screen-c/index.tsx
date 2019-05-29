// @flow
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import styles from './styles';
import { Navigation } from 'react-native-navigation';

interface Props {
  componentId: string;
}

const ScreenC = (props: Props) => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.content}>
          <Text style={styles.title}>Screen C</Text>
          <TouchableOpacity style={styles.button} onPress={() => Navigation.push(props.componentId, {
            component: {
              name: 'routes.screen-d',
              options: { topBar: { visible: false } }
            }
          })}>
            <Text style={styles.buttonText}>Push</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ScreenC;
