import React from "react";
import { View, StyleSheet } from 'react-native';

function ButtonsRow({ children }) {
  return (
    <View style={styles.buttonsrow}>{ children }</View>
  );
};

const styles = StyleSheet.create({
  buttonsrow: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 80,
    marginBottom: 30,
  },
})

export default ButtonsRow;