import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  // Define your props here
}

const ComponentName: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: '#FFA94D'}}>Touch the Screen To Start</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ComponentName;