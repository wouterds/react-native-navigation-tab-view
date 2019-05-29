// @flow
import React, { useState } from 'react';
import { View, SafeAreaView, Dimensions, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import styles from './styles';

const FirstRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#4a69bd' }]}>
    <SafeAreaView>
      <View style={styles.content}>
        <Text style={styles.title}>Screen D - Tab 1</Text>
      </View>
    </SafeAreaView>
  </View>
);
const SecondRoute = () => (
  <View style={[styles.scene, { backgroundColor: '#4a69bd' }]}>
    <SafeAreaView>
      <View style={styles.content}>
        <Text style={styles.title}>Screen D - Tab 2</Text>
      </View>
    </SafeAreaView>
  </View>
);

const ScreenD = () => {
  const [index, setIndex] = useState(0);
  const routes = [
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ];

  return (
    <View style={styles.container}>
      <TabView
        style={styles.tabView}
        navigationState={{ index, routes }}
        renderTabBar={(props) => (<SafeAreaView>
          <TabBar style={styles.tabBar} {...props} />
        </SafeAreaView>)}
        renderScene={SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        })}
        onIndexChange={index => setIndex(index)}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
    </View>
  );
};

export default ScreenD;
