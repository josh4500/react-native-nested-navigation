import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import NestedNavigation from 'react-native-nested-navigation';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    NestedNavigation.multiply(3, 70).then(setResult);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
