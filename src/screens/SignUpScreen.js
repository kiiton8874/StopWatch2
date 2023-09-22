import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';

import Button from "../components/button";

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainTitle}>StopWatchApp</Text>
      </View>
      <View tyle={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          value={userName}
          onChangeText={(text) => { setUserName(text);}}
          autoCapitalize="none"
          placeholder="ユーザー名"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text);}}
          placeholder="パスワード"
          secureTextEntry
        />
      </View>
      <Button
        label='ログイン'
        onPress={() => { navigation.reset({
          index: 0,
          routes: [{ name: 'StopWatch'}],
        }); }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  mainTitle: {
    color: '#ffffff',
    margin: 32,
    marginTop: 58,
    fontSize: 48,
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    color: '#ffffff',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },
});
