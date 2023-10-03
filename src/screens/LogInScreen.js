import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Alert, TouchableOpacity } from 'react-native';

import { auth } from "../utils/firebase";

import Button from "../components/button";

export default function LogInScreen(props) {
  const { navigation } = props;
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  // function handlePress() {
    
  // }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.mainTitle}>StopWatchApp</Text>
      </View>
      <View tyle={styles.inner}>
        <Text style={styles.title}>Log In</Text>
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
      <View>
        <TouchableOpacity>
          <Text style={styles.footerText}>未登録の場合はこちらから</Text>
        </TouchableOpacity>
      </View>
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
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3'
  }
});
