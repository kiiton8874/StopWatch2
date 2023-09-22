import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Timer from "./timer";

function Lap ({ number, interval, fastest, slowest }) {
  const lapStyle = [
    styles.lapText,
    fastest && styles.fastest,
    slowest && styles.slowest,
  ]

  return (
    <View style={styles.lap}>
      <Text style={lapStyle}>Lap: { number } </Text>
      <Timer style={[lapStyle, styles.lapTimer]} interval={interval} />
    </View>
  );
}

const styles = StyleSheet.create({
  lapText: {
    color: '#ffffff',
    fontSize: 18,
  },
  lapTimer: {
    width: 30,
  },
  lap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#151515',
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  fastest: {
    color: '#4bc05f',
  },
  slowest: {
    color: '#cc3531',
  },
});

export default Lap;