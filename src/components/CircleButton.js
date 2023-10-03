import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function CircleButton({ title, color, background, onPress, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: background}]}
      activeOpacity={disabled ? 1.0 : 0.7}
    >
      <View style={styles.buttonBorder}>
        <Text style={[ styles.buttonTitle, { color }]}>{ title }</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBorder: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  buttonTitle: {
    fontSize: 18,
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 30,
    top: 40,
  },
})