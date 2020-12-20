import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styled from 'styled-components/native';

const TestComp = styled.Button``;

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Text testID="test_test">Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text testID="counter" accessibilityLabel={counter.toString()}>{counter}</Text>
      <TestComp onPress={() => setCounter(counter + 1)} testID="testButton" title="Button" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/* Learning notes
  - Haven't needed to reset the app for tests to pass with changes.
  - @FIXME: Styled components acting strange with testID
    - @NOTE: Some components within styled component allow for testID prop
             such as the native elements Button etc, however not supported directly
             for components such as TouchableOpacity.
      - Workarounds:
        - Using accesibilityLabel as the dependent state that will get checked upon.
        + https://github.com/styled-components/styled-components/search?q=testID
        + https://github.com/expo/expo/issues/3599 (issue related to hacky workaround)
*/