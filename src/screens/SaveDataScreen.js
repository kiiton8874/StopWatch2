import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function SaveDataScreen(props) {
  const { navigation } = props;
  return(
    <View style={styles.container}>
      <Text style={styles.title}>SaveDate</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  title: {
    color: '#ffffff',
  },
});
